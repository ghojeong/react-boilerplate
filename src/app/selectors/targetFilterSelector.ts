import { RootState, TargetFilterState } from "app/reducers";

export const targetFilterSelector = () => ({
  targetFilter
}: RootState): TargetFilterState => targetFilter;
