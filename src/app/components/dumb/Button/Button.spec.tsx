import React from "react";
import TestRenderer from "react-test-renderer";
import { Button } from "./Button";
import MuiButton from "@material-ui/core/Button";

jest.mock("@material-ui/core/Button", () => "MuiButton");

describe("Button 컴포넌트 테스트", () => {
  const BasicButton = TestRenderer.create(<Button />);
  const ActiveButton = TestRenderer.create(<Button active />);
  const DisabledButton = TestRenderer.create(<Button disabled />);

  test("정상적으로 렌더링 된다.", () => {
    expect(BasicButton.root.findByType(Button)).toBeTruthy();
    expect(ActiveButton.root.findByType(Button)).toBeTruthy();
    expect(DisabledButton.root.findByType(Button)).toBeTruthy();
  });

  test("기본 버튼은 outlined 되어 있다.", () => {
    const { props } = BasicButton.root.findByType(MuiButton);
    expect(props.color).toEqual("primary");
    expect(props.disabled).toBeFalsy();
    expect(props.variant).toEqual("outlined");
  });

  test("disabled 버튼은 outlined 되어 있다.", () => {
    const { props } = DisabledButton.root.findByType(MuiButton);
    expect(props.color).toEqual("primary");
    expect(props.disabled).toBeTruthy();
    expect(props.variant).toEqual("outlined");
  });

  test("active 버튼은 contained 되어 있다.", () => {
    const { props } = ActiveButton.root.findByType(MuiButton);
    expect(props.color).toEqual("primary");
    expect(props.disabled).toBeFalsy();
    expect(props.variant).toEqual("contained");
  });
});
