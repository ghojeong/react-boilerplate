import { createAsyncAction, ActionType } from "typesafe-actions";
import { Options, TargetsModel } from "app/models";

export const fetchTargetsIdAsyncAction = createAsyncAction(
  "FETCH_TARGETS_ID_REQUEST",
  "FETCH_TARGETS_ID_SUCCESS",
  "FETCH_TARGETS_ID_FAILURE"
)<Options, TargetsModel, string>();

export type TargetsActions = ActionType<typeof fetchTargetsIdAsyncAction>;
