import { RootState, StepState } from "app/reducers";

export const stepSelector = () => ({ step }: RootState): StepState => step;
