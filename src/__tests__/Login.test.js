import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";

import Login from "../components/Login";

const setup = (props = {}) => shallow(<Login {...props} />);

const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);

describe("Login component test suite", () => {
  const wrapper = setup();

  test("matches snapshot", () => {
    const loginSnapshot = create(<Login />).toJSON();
    expect(loginSnapshot).toMatchSnapshot();
  });
  test("renders without an error", () => {
    const loginComponent = findByTestAttr(wrapper, "component-login");
    expect(loginComponent.length).toBe(1);
  });
});
