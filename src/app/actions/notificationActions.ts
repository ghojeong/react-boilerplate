import { createAction, ActionType } from "typesafe-actions";
import { NotificationModel } from "app/models";

export const enqueueSnackbarAction = createAction("ENQUEUE_SNACKBAR")<
  NotificationModel
>();
export const resetNotificationAction = createAction("RESET_NOTIFICATION")();

export type NotificationActions =
  | ActionType<typeof enqueueSnackbarAction>
  | ActionType<typeof resetNotificationAction>;
