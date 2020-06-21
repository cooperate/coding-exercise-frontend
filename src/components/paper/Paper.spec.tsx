import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Paper from "./Paper";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<Paper />", () => {
  it("renders children when passed in", () => {
    const wrapper = shallow(
      <Paper>
        <div className="unique" />
      </Paper>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});
