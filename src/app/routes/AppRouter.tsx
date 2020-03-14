import React, { FC } from "react";
import { useSelector } from "react-redux";
import { stepSelector } from "app/selectors";
import { DefaultLayout } from "app/layouts";
import {
  SelectCustomerScreen,
  WriteMessageScreen,
  ConfirmScreen
} from "app/screens";

/**
 * NOTE: url이 아니라 step에 따라 라우팅이 될 수 있도록 한다.
 * url을 활용하지 않으므로, react-router-dom 이 필요가 없다.
 * react-router-dom 의 Switch와 Route를 흉내낼 수 있으면, 흉내내보자.
 */
const Route: FC<{ step: number }> = ({ step }) => {
  switch (step) {
    case 0:
      return <SelectCustomerScreen />;
    case 1:
      return <WriteMessageScreen />;
    case 2:
      return <ConfirmScreen />;
    default:
      return <SelectCustomerScreen />;
  }
};
export const AppRouter = () => {
  const { currentStep } = useSelector(stepSelector());

  return (
    <DefaultLayout>
      <Route step={currentStep} />
    </DefaultLayout>
  );
};
