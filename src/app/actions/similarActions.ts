import { createAction, createAsyncAction, ActionType } from "typesafe-actions";
import { ProblemModel } from "app/models";

export const fetchSimilarsAsyncAction = createAsyncAction(
  "FETCH_SIMILARS_REQUEST",
  "FETCH_SIMILARS_SUCCESS",
  "FETCH_SIMILARS_FAILURE"
)<undefined, ProblemModel[], string>();

export const addSimilarToProblemAction = createAction(
  "ADD_SIMILAR_TO_PROBLEM"
)<{
  problemArrIdx: number;
  similarArrIdx: number;
  similar: ProblemModel;
}>();
export const replaceSimilarWithProblemAction = createAction(
  "REPLACE_SIMILAR_WITH_PROBLEM"
)<{
  problemArrIdx: number;
  similarArrIdx: number;
  problem: ProblemModel;
  similar: ProblemModel;
}>();

export type SimilarActions =
  | ActionType<typeof fetchSimilarsAsyncAction>
  | ActionType<typeof addSimilarToProblemAction>
  | ActionType<typeof replaceSimilarWithProblemAction>;
