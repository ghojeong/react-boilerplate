import { combineReducers } from "redux";

import { NotificationState, notificationReducer } from "./notificationReducer";
import { ProblemsState, problemsReducer } from "./problemsReducer";
import { SimilarsState, similarsReducer } from "./similarsReducer";

export * from "./notificationReducer";
export * from "./problemsReducer";
export * from "./similarsReducer";

export interface RootState {
  notification: NotificationState;
  problems: ProblemsState;
  similars: SimilarsState;
}
export const rootReducer = combineReducers<RootState>({
  notification: notificationReducer,
  problems: problemsReducer,
  similars: similarsReducer
});
