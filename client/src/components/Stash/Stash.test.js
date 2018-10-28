import React from "react";
import { shallow } from "enzyme";
import stashes from "../../data/stashes";

import Stash from "./Stash";

describe("Stash", () => {
  it("should render correctly", () => {
    const component = shallow(<Stash match={{ params: { id: "1" } }} />);
    expect(component).toMatchSnapshot();
  });

  it("should have the correct title, description, number of articles", () => {
    const component = shallow(<Stash match={{ params: { id: "1" } }} />);

    const title = stashes[0].title;
    const description = stashes[0].description;
    const articlesLength = stashes[0].articles.length;

    expect(component.find("h1").text()).toContain(title);
    expect(component.find("p.description").text()).toEqual(description);
    expect(component.find(".table-body a")).toHaveLength(articlesLength);
  });

  it("should have a working back button", () => {
    const component = shallow(<Stash match={{ params: { id: "1" } }} />);

    const category = stashes[0].category.toLowerCase();

    expect(component.find(".btn-back").props().to).toBe(`/${category}`);
  });
});
