import { Subject, of, throwError } from "rxjs";
import { Action } from "redux";
import { ActionsObservable, StateObservable } from "redux-observable";
import { mocked } from "ts-jest/utils";
import { fetchSimilarsAsyncAction, enqueueSnackbarAction } from "app/actions";
import * as service from "app/services";
import { fetchSimilarsEpic } from "./fetchSimilarsEpic";
import * as feSimilars from "app/assets/fe-similars.json";
const similars = feSimilars.data;
jest.mock("app/services");

describe("fetchSimilarsEpic 테스트", () => {
  const similarService = mocked(service.similarService, true);

  test("similars 조회가 성공하면 success 액션이 발생해야 한다.", done => {
    // <!-- mock
    similarService.getSimilars.mockReturnValueOnce(of(similars));
    // -->
    const actions$ = ActionsObservable.of(fetchSimilarsAsyncAction.request());
    const state$ = new StateObservable(new Subject(), {});
    const dependencies = { similarService };
    const actualActions: Action[] = [];

    fetchSimilarsEpic(actions$, state$, dependencies).subscribe({
      next: (action: Action) => actualActions.push(action),
      complete: () => {
        expect(actualActions).toEqual([
          fetchSimilarsAsyncAction.success(similars)
        ]);
        done();
      }
    });
  });

  test("similars 조회가 실패하면 failure 액션과 스낵바 액션이 발생해야 한다.", done => {
    // <!-- mock
    similarService.getSimilars = jest
      .fn()
      .mockImplementation(() => throwError(new Error("Get Similars Error")));
    // -->
    const actions$ = ActionsObservable.of(fetchSimilarsAsyncAction.request());
    const state$ = new StateObservable(new Subject(), {});
    const dependencies = { similarService };
    const actualActions: Action[] = [];

    fetchSimilarsEpic(actions$, state$, dependencies).subscribe({
      next: action => actualActions.push(action),
      complete: () => {
        expect(actualActions).toEqual([
          fetchSimilarsAsyncAction.failure("Error: Get Similars Error"),
          enqueueSnackbarAction({
            message: "Get Similars Error",
            variant: "error"
          })
        ]);
        done();
      }
    });
  });
});
