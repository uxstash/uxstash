import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";

import NavItem from "./NavItem";

describe("NavItem", () => {
  it("should render correctly with props", () => {
    const title = "test title";
    const path = "/testpath";
    const description = "test description";

    const component = mount(
      <MemoryRouter initialEntries={[path]}>
        <Route
          render={props => (
            <NavItem
              {...props}
              to={path}
              title={title}
              description={description}
            />
          )}
        />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});

describe("NavItem", () => {
  it("should render correctly with no props", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/strategy"]}>
        <Route render={props => <NavItem />} />
      </MemoryRouter>
    );
    console.log(component.debug());
    expect(component).toMatchSnapshot();
  });
});
