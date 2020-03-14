import { createAction, createAsyncAction, ActionType } from "typesafe-actions";
import { ProblemModel } from "app/models";

export const fetchProblemsAsyncAction = createAsyncAction(
  "FETCH_PROBLEMS_REQUEST",
  "FETCH_PROBLEMS_SUCCESS",
  "FETCH_PROBLEMS_FAILURE"
)<undefined, ProblemModel[], string>();

export const activateProblemAction = createAction("ACTIVATE_PROBLEM")<{
  problemArrIdx: number;
}>();
export const removeProblemAction = createAction("REMOVE_PROBLEM")<{
  problemArrIdx: number;
}>();

export type ProblemActions =
  | ActionType<typeof fetchProblemsAsyncAction>
  | ActionType<typeof activateProblemAction>
  | ActionType<typeof removeProblemAction>;
