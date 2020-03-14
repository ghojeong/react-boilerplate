import { resetAction, fetchProblemsAsyncAction } from "app/actions";
import {
  ProblemsState,
  problemsReducer,
  problemsInitialState
} from "./problemsReducer";
import * as feProblems from "app/assets/fe-problems.json";
const problems = feProblems.data;

describe("problemsReducer 테스트", () => {
  test("resetAction 액션이 발행되면 state가 초기값으로 세팅 되어야 한다.", () => {
    const state: ProblemsState = {
      isLoading: true,
      errMsg: "Error",
      array: [],
      activeIdx: 11
    };
    const action = resetAction();
    expect(problemsReducer(state, action)).toEqual(problemsInitialState);
  });

  test("fetchSimilarsAsyncAction을 request 하면 isLoading 이 true가 되어야 한다.", () => {
    const state: ProblemsState = problemsInitialState;
    const action = fetchProblemsAsyncAction.request();
    expect(problemsReducer(state, action)).toEqual({
      isLoading: true,
      errMsg: "",
      array: [],
      activeIdx: -1
    });
  });

  test("fetchProblemsAsyncAction을 성공하면 state에, 받아온 정보가 추가 되어야 한다.", () => {
    const state: ProblemsState = problemsInitialState;
    const action = fetchProblemsAsyncAction.success(problems);
    expect(problemsReducer(state, action)).toEqual({
      isLoading: false,
      errMsg: "",
      array: problems,
      activeIdx: -1
    });
  });

  test("fetchProblemsAsyncAction을 실패하면 errMsg가 세팅 되어야 한다.", () => {
    const state: ProblemsState = problemsInitialState;
    const action = fetchProblemsAsyncAction.failure(
      "fetchProblemsAsyncAction Failed"
    );
    expect(problemsReducer(state, action)).toEqual({
      isLoading: false,
      errMsg: "fetchProblemsAsyncAction Failed",
      array: [],
      activeIdx: -1
    });
  });
});
