import { combineReducers } from "redux";

import { StepState, stepReducer } from "./stepReducer";
import { TargetFilterState, targetFilterReducer } from "./targetFilterReducer";
import { CustomerTagsState, customerTagsReducer } from "./customerTagsReducer";
import { TargetsState, targetsReducer } from "./targetsReducer";
import { NotificationState, notificationReducer } from "./notificationReducer";

export * from "./stepReducer";
export * from "./targetFilterReducer";
export * from "./customerTagsReducer";
export * from "./targetsReducer";
export * from "./notificationReducer";

export interface RootState {
  step: StepState;
  targetFilter: TargetFilterState;
  customerTags: CustomerTagsState;
  targets: TargetsState;
  notification: NotificationState;
}
export const rootReducer = combineReducers<RootState>({
  step: stepReducer,
  targetFilter: targetFilterReducer,
  customerTags: customerTagsReducer,
  targets: targetsReducer,
  notification: notificationReducer
});
