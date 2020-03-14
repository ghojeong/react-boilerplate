import { ExtraActions } from "./extraActions";
import { StepActions } from "./stepActions";
import { TargetFilterActions } from "./targetFilterActions";
import { CustomerTagActions } from "./customerTagActions";
import { TargetsActions } from "./targetActions";
import { NotificationActions } from "./notificationActions";

export * from "./extraActions";
export * from "./stepActions";
export * from "./targetFilterActions";
export * from "./customerTagActions";
export * from "./targetActions";
export * from "./notificationActions";

export type Actions =
  | ExtraActions
  | StepActions
  | TargetFilterActions
  | CustomerTagActions
  | TargetsActions
  | NotificationActions;
