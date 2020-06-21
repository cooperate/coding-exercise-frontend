import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import ListItem from "./ListItem";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<ListItem />", () => {
  it("renders children when passed in", () => {
    const wrapper = shallow(
      <ListItem>
        <div className="unique" />
      </ListItem>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});
