import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import List from "./List";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<List />", () => {
  it("renders children when passed in", () => {
    const wrapper = shallow(
      <List>
        <div className="unique" />
      </List>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});
