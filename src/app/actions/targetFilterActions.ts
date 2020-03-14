import { createAction, ActionType } from "typesafe-actions";

export const changeFilterTypeAction = createAction("CHANGE_FILTER_TYPE")<{
  filterTypeIdx: number;
}>();
export const changeVisitIntervalAction = createAction("CHANGE_VISIT_INTERVAL")<{
  visitIntervalIdx: number;
}>();
export const changeLowerAction = createAction("CHANGE_LOWER")<{
  lower: number;
}>();
export const changeUpperAction = createAction("CHANGE_UPPER")<{
  upper: number;
}>();

export type TargetFilterActions =
  | ActionType<typeof changeFilterTypeAction>
  | ActionType<typeof changeVisitIntervalAction>
  | ActionType<typeof changeLowerAction>
  | ActionType<typeof changeUpperAction>;
