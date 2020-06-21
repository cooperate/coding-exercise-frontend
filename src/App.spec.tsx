import React from "react";
import { mount, configure } from "enzyme";
import { expect } from "chai";
import App from "./App";
import Header from "./components/header/Header";
import Search from "./containers/Search";
import ColumnAddOptions from "./components/column-add-option/ColumnAddOptions";
import ColumnAddItem from "./containers/CreateItem";
import ColumnContainer from "./containers/Columns";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe("<App />", () => {
  it("contains an <Header/> component", function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
  it("contains an <Search/> component", function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(Search)).to.have.length(1);
  });
  it("contains an <ColumnAddOptions/> component", function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(ColumnAddOptions)).to.have.length(1);
  });
  it("contains an <ColumnAddItem/> component", function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(ColumnAddItem)).to.have.length(1);
  });
  it("contains an <ColumnContainer/> component", function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(ColumnContainer)).to.have.length(1);
  });
});
