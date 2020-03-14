import { resetAction, fetchSimilarsAsyncAction } from "app/actions";
import {
  SimilarsState,
  similarsReducer,
  similarsInitialState
} from "./similarsReducer";
import * as feSimilars from "app/assets/fe-similars.json";
const similars = feSimilars.data;

describe("similarsReducer 테스트", () => {
  test("resetAction 액션이 발행되면 state가 초기값으로 세팅 되어야 한다.", () => {
    const state: SimilarsState = {
      isLoading: true,
      errMsg: "Error",
      array: []
    };
    const action = resetAction();
    expect(similarsReducer(state, action)).toEqual(similarsInitialState);
  });

  test("fetchSimilarsAsyncAction을 request 하면 isLoading 이 true가 되어야 한다.", () => {
    const state: SimilarsState = similarsInitialState;
    const action = fetchSimilarsAsyncAction.request();
    expect(similarsReducer(state, action)).toEqual({
      isLoading: true,
      errMsg: "",
      array: []
    });
  });

  test("fetchSimilarsAsyncAction을 성공하면 state에, 받아온 정보가 추가 되어야 한다.", () => {
    const state: SimilarsState = similarsInitialState;
    const action = fetchSimilarsAsyncAction.success(similars);
    expect(similarsReducer(state, action)).toEqual({
      isLoading: false,
      errMsg: "",
      array: similars
    });
  });

  test("fetchSimilarsAsyncAction을 실패하면 errMsg가 세팅 되어야 한다.", () => {
    const state: SimilarsState = similarsInitialState;
    const action = fetchSimilarsAsyncAction.failure(
      "fetchSimilarsAsyncAction Failed"
    );
    expect(similarsReducer(state, action)).toEqual({
      isLoading: false,
      errMsg: "fetchSimilarsAsyncAction Failed",
      array: []
    });
  });
});
