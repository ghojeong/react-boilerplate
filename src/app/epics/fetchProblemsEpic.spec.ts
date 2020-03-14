import { Subject, of, throwError } from "rxjs";
import { Action } from "redux";
import { ActionsObservable, StateObservable } from "redux-observable";
import { mocked } from "ts-jest/utils";
import { fetchProblemsAsyncAction, enqueueSnackbarAction } from "app/actions";
import * as service from "app/services";
import { fetchProblemsEpic } from "./fetchProblemsEpic";

const problems = [
  {
    id: 41303,
    unitCode: 31124003,
    answerData: "4[개]",
    problemLevel: 2,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/243/9_311243_Tu277_0_p.png",
    unitName: "부등식 y > f(x), y < f(x)가 나타내는 영역",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 20,
    correctTimes: 12,
    hwpExist: 2,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 41356,
    unitCode: 31124009,
    answerData: "4",
    problemLevel: 5,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/245/9_311245_cuE1r_22_p.png",
    unitName: "부등식의 영역에 한 점이 포함될 조건",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 17,
    correctTimes: 9,
    hwpExist: 2,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  }
];

jest.mock("app/services");

describe("epic 테스트", () => {
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
});