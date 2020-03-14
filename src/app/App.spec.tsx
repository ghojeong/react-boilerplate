import React from "react";
import TestRenderer from "react-test-renderer";
import App from "./App";

/**
 * BUG: react-test-render 로 App을 렌더링할 시, `ReferenceError: HTMLInputElement is not defined` 라고 에러가 뜸
 * 조사결과 본인의 코드 문제가 아니라, 사용한 material-ui의 최신버젼에서 발생하는 문제라고 함
 * 사용한 npm 모듈과 호환되도록, 테스트 환경을 다시 구축할 필요가 있음
 * material-ui 측에서는 jest가 아닌 mocha를 권장
 * */

describe("App 테스트", () => {
  const testInstance = TestRenderer.create(<App />);
  const AppComponent = testInstance.root.findByType(App);

  test("정상적으로 렌더링 된다.", () => {
    expect(AppComponent).toBeTruthy();
  });
});
