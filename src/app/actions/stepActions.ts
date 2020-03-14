import { createAction, ActionType } from "typesafe-actions";

export const stepNextAction = createAction("STEP_NEXT")();
export const stepBackAction = createAction("STEP_BACK")();

export type StepActions =
  | ActionType<typeof stepNextAction>
  | ActionType<typeof stepBackAction>;
