import { RootState, TargetsState } from "app/reducers";

export const targetsSelector = () => ({ targets }: RootState): TargetsState =>
  targets;
