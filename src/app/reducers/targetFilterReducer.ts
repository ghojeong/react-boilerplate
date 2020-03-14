import { getType } from "typesafe-actions";
import {
  Actions,
  resetAction,
  changeFilterTypeAction,
  changeVisitIntervalAction,
  changeLowerAction,
  changeUpperAction
} from "app/actions";

export interface TargetFilterState {
  filterTypeIdx: number;
  visitIntervalIdx: number;
  lower: number;
  upper: number;
}
const targetFilterInitialState: TargetFilterState = {
  filterTypeIdx: 0,
  visitIntervalIdx: 0,
  lower: 1,
  upper: 1
};
export const targetFilterReducer = (
  targetFilterState = targetFilterInitialState,
  action: Actions
): TargetFilterState => {
  switch (action.type) {
    case getType(resetAction):
      return targetFilterInitialState;
    case getType(changeFilterTypeAction):
      return {
        ...targetFilterState,
        filterTypeIdx: action.payload.filterTypeIdx
      };
    case getType(changeVisitIntervalAction):
      return {
        ...targetFilterState,
        visitIntervalIdx: action.payload.visitIntervalIdx
      };
    case getType(changeLowerAction):
      return {
        ...targetFilterState,
        lower: action.payload.lower > 0 ? action.payload.lower : 1,
        upper:
          action.payload.lower > targetFilterState.upper
            ? action.payload.lower
            : targetFilterState.upper
      };
    case getType(changeUpperAction):
      return {
        ...targetFilterState,
        upper: action.payload.upper > 0 ? action.payload.upper : 1,
        lower:
          action.payload.upper > 0 &&
          targetFilterState.lower > action.payload.upper
            ? action.payload.upper
            : targetFilterState.lower
      };
    default:
      return targetFilterState;
  }
};
