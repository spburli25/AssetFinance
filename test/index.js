import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer } from './components';

describe('MainComponent', () => {
  it('Page should contain header ,navigation,  body and footer components with necessary details.', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>
    ])).to.equal(true);
  });
});
describe('BeerListContainer', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>
    ])).to.equal(true);
  });
});
describe('BeerListContainer', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>
    ])).to.equal(true);
  });
});
