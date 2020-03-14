import { createAction, ActionType } from "typesafe-actions";

export const resetAction = createAction("RESET")();

export type ExtraActions = ActionType<typeof resetAction>;
