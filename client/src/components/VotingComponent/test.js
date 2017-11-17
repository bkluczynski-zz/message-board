import React from 'react';
import { shallow, mount } from 'enzyme';
import VotingComponent from '.';

describe('VotingComponent', () => {

  let component;

  beforeEach(() => {
    component = shallow(<VotingComponent/>);
  })

  it('should render properly', () => {
    expect(component.exists()).toEqual(true);
  });

})
