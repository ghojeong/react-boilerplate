import { RootState } from "app/reducers";

export const problemsSelector = () => ({ problems }: RootState) => problems;
