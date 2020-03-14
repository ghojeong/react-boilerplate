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
      return {
        ...state,
        array: state.array.splice(action.payload.problemArrIdx, 1)
      };
    case getType(addSimilarToProblemAction):
      return {
        ...state,
        array: state.array.splice(
          action.payload.problemArrIdx + 1,
          0,
          action.payload.similar
        )
      };
    case getType(replaceSimilarWithProblemAction):
      return {
        ...state,
        array: state.array.splice(
          action.payload.problemArrIdx,
          1,
          action.payload.similar
        )
      };
    default:
      return state;
  }
};
