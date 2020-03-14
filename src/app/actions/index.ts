import { ExtraActions } from "./extraActions";
import { NotificationActions } from "./notificationActions";
import { ProblemActions } from "./problemActions";
import { SimilarActions } from "./similarActions";

export * from "./extraActions";
export * from "./notificationActions";
export * from "./problemActions";
export * from "./similarActions";

export type Actions =
  | ExtraActions
  | NotificationActions
  | ProblemActions
  | SimilarActions;
