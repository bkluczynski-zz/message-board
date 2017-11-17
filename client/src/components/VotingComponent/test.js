import React from 'react';
import { shallow, mount } from 'enzyme';
import VotingComponent from '.';

describe('VotingComponent', () => {

  let component;

  beforeEach(() => {
    component = mount(<VotingComponent/>);
  })

  it('should render properly', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have two buttons', () => {
    expect(component.find('#voting').children().length).toEqual(2)
  })

})
