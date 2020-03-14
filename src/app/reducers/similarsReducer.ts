import { getType } from "typesafe-actions";
import {
  Actions,
  resetAction,
  fetchSimilarsAsyncAction,
  addSimilarToProblemAction,
  replaceSimilarWithProblemAction
} from "app/actions";
import { ProblemModel } from "app/models";

export interface SimilarsState {
  isLoading: boolean;
  errMsg: string;
  array: ProblemModel[];
}

const initialState: SimilarsState = {
  isLoading: false,
  errMsg: "",
  array: []
};
export const similarsReducer = (
  state = initialState,
  action: Actions
): SimilarsState => {
  const similarArr = state.array;
  switch (action.type) {
    case getType(resetAction):
      return initialState;
    case getType(fetchSimilarsAsyncAction.request):
      return {
        ...state,
        isLoading: true,
        errMsg: ""
      };
    case getType(fetchSimilarsAsyncAction.success):
      return {
        ...state,
        isLoading: false,
        errMsg: "",
        array: action.payload
      };
    case getType(fetchSimilarsAsyncAction.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload
      };
    case getType(addSimilarToProblemAction):
      similarArr.splice(action.payload.similarArrIdx, 1);
      return {
        ...state,
        array: similarArr
      };
    case getType(replaceSimilarWithProblemAction):
      similarArr.splice(
        action.payload.similarArrIdx,
        1,
        action.payload.problem
      );
      return {
        ...state,
        array: similarArr
      };
    default:
      return state;
  }
};
