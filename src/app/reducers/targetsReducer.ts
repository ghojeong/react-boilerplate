import { getType } from "typesafe-actions";
import { Actions, resetAction, fetchTargetsIdAsyncAction } from "app/actions";
import { TargetsModel } from "app/models";

export interface TargetsState {
  isLoading: boolean;
  errMsg: string;
  item: TargetsModel | null;
}

const targetsInitialState: TargetsState = {
  isLoading: false,
  errMsg: "",
  item: null
};
export const targetsReducer = (
  targetsState = targetsInitialState,
  action: Actions
): TargetsState => {
  switch (action.type) {
    case getType(resetAction):
      return targetsInitialState;
    case getType(fetchTargetsIdAsyncAction.request):
      return {
        ...targetsState,
        isLoading: true,
        errMsg: ""
      };
    case getType(fetchTargetsIdAsyncAction.success):
      return {
        ...targetsState,
        isLoading: false,
        errMsg: "",
        item: action.payload
      };
    case getType(fetchTargetsIdAsyncAction.failure):
      return {
        ...targetsState,
        isLoading: false,
        errMsg: action.payload
      };
    default:
      return targetsState;
  }
};
