import React from 'react';
import { shallow, mount } from 'enzyme';
import VoteButton from '.';

describe("VoteButton", () => {
  let component;

  beforeEach(() => {
    component = shallow(<VoteButton/>)
  })

  it('should render a button', () => {
    expect(component.find('.vote').length).toEqual(1);
  });
});
