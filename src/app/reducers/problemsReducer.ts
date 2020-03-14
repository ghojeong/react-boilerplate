import { getType } from "typesafe-actions";
import {
  Actions,
  resetAction,
  fetchProblemsAsyncAction,
  activateProblemAction,
  removeProblemAction,
  addSimilarToProblemAction,
  replaceSimilarWithProblemAction
} from "app/actions";
import { ProblemModel } from "app/models";

export interface ProblemsState {
  isLoading: boolean;
  errMsg: string;
  array: ProblemModel[];
  activeIdx: number;
}

const initialState: ProblemsState = {
  isLoading: false,
  errMsg: "",
  array: [],
  activeIdx: -1
};
export const problemsReducer = (
  state = initialState,
  action: Actions
): ProblemsState => {
  const problemArr = state.array;
  switch (action.type) {
    case getType(resetAction):
      return initialState;
    case getType(fetchProblemsAsyncAction.request):
      return {
        ...state,
        isLoading: true,
        errMsg: ""
      };
    case getType(fetchProblemsAsyncAction.success):
      return {
        ...state,
        isLoading: false,
        errMsg: "",
        array: action.payload
      };
    case getType(fetchProblemsAsyncAction.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload
      };
    case getType(activateProblemAction):
      return {
        ...state,
        activeIdx: action.payload.problemArrIdx
      };
    case getType(removeProblemAction):
      problemArr.splice(action.payload.problemArrIdx, 1);
      return {
        ...state,
        array: problemArr,
        activeIdx:
          action.payload.problemArrIdx === state.activeIdx
            ? -1
            : state.activeIdx
      };
    case getType(addSimilarToProblemAction):
      problemArr.splice(
        action.payload.problemArrIdx + 1,
        0,
        action.payload.similar
      );
      return {
        ...state,
        array: problemArr
      };
    case getType(replaceSimilarWithProblemAction):
      problemArr.splice(
        action.payload.problemArrIdx,
        1,
        action.payload.similar
      );
      return {
        ...state,
        array: problemArr
      };
    default:
      return state;
  }
};
