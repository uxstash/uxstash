import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";

import Header from "./Header";

describe("Header", () => {
  it("should render correctly in debug mode", () => {
    const component = shallow(<Header debug />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });

  it("should render 6 list items", () => {
    const component = shallow(<Header />);

    expect(component.find("ul").children()).toHaveLength(6);
  });

  it("should only render 1 active link and 1 brand", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/strategy"]}>
        <Route component={Header} />
      </MemoryRouter>
    );
    expect(component.find("li.brand")).toHaveLength(1);
    expect(component.find("li.active")).toHaveLength(1);
  });
});
