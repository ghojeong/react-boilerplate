import { getType } from "typesafe-actions";
import {
  Actions,
  resetAction,
  resetNotificationAction,
  enqueueSnackbarAction
} from "app/actions";
import { NotificationModel } from "app/models";

export interface NotificationState {
  notification: NotificationModel | null;
}

const notificationInitialState: NotificationState = {
  notification: null
};
export const notificationReducer = (
  notificationState = notificationInitialState,
  action: Actions
): NotificationState => {
  switch (action.type) {
    case getType(resetAction):
      return notificationInitialState;
    case getType(resetNotificationAction):
      return notificationInitialState;
    case getType(enqueueSnackbarAction):
      return {
        ...notificationState,
        notification: action.payload
      };
    default:
      return notificationState;
  }
};
