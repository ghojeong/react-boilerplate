import { getType } from "typesafe-actions";
import { steps } from "app/assets";
import {
  Actions,
  resetAction,
  stepNextAction,
  stepBackAction
} from "app/actions";

export interface StepState {
  currentStep: number;
}
const stepInitialState: StepState = {
  currentStep: 0
};
export const stepReducer = (
  stepState = stepInitialState,
  action: Actions
): StepState => {
  switch (action.type) {
    case getType(resetAction):
      return stepInitialState;
    case getType(stepNextAction):
      return {
        ...stepState,
        currentStep:
          stepState.currentStep + 1 > steps.length
            ? steps.length
            : stepState.currentStep + 1
      };
    case getType(stepBackAction):
      return {
        ...stepState,
        currentStep:
          stepState.currentStep - 1 > 0 ? stepState.currentStep - 1 : 0
      };
    default:
      return stepState;
  }
};
