import { Subject, of, throwError } from "rxjs";
import { Action } from "redux";
import { ActionsObservable, StateObservable } from "redux-observable";
import { mocked } from "ts-jest/utils";
import { fetchProblemsAsyncAction, enqueueSnackbarAction } from "app/actions";
import * as service from "app/services";
import { fetchProblemsEpic } from "./fetchProblemsEpic";
import * as feProblems from "app/assets/fe-problems.json";
const problems = feProblems.data;
jest.mock("app/services");

describe("fetchProblemsEpic 테스트", () => {
  const problemService = mocked(service.problemService, true);

  test("problems 조회가 성공하면 success 액션이 발생해야 한다.", done => {
    // <!-- mock
    problemService.getProblems.mockReturnValueOnce(of(problems));
    // -->
    const actions$ = ActionsObservable.of(fetchProblemsAsyncAction.request());
    const state$ = new StateObservable(new Subject(), {});
    const dependencies = { problemService };
    const actualActions: Action[] = [];

    fetchProblemsEpic(actions$, state$, dependencies).subscribe({
      next: (action: Action) => actualActions.push(action),
      complete: () => {
        expect(actualActions).toEqual([
          fetchProblemsAsyncAction.success(problems)
        ]);
        done();
      }
    });
  });

  test("problems 조회가 실패하면 failure 액션과 스낵바 액션이 발생해야 한다.", done => {
    // <!-- mock
    problemService.getProblems = jest
      .fn()
      .mockImplementation(() => throwError(new Error("Get Problems Error")));
    // -->
    const actions$ = ActionsObservable.of(fetchProblemsAsyncAction.request());
    const state$ = new StateObservable(new Subject(), {});
    const dependencies = { problemService };
    const actualActions: Action[] = [];

    fetchProblemsEpic(actions$, state$, dependencies).subscribe({
      next: action => actualActions.push(action),
      complete: () => {
        expect(actualActions).toEqual([
          fetchProblemsAsyncAction.failure("Error: Get Problems Error"),
          enqueueSnackbarAction({
            message: "Get Problems Error",
            variant: "error"
          })
        ]);
        done();
      }
    });
  });
});
