import { createAction, ActionType } from "typesafe-actions";

// NOTE: 리덕스 스토어를 초기화하는 액션
export const resetAction = createAction("RESET")();

export type ExtraActions = ActionType<typeof resetAction>;
