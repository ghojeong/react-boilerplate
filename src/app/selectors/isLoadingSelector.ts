import { RootState } from "app/reducers";

// NOTE: 여러 비동기작업의 isLoading을 || 연산을 통해 한꺼번에 체크해주는 셀렉터
export const isLoadingSelector = () => ({
  customerTags,
  targets
}: RootState) => ({
  isLoading: customerTags.isLoading || targets.isLoading
});
