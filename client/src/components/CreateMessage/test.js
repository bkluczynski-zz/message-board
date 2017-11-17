/* global expect, it, describe */

import React from 'react';
import { shallow, mount } from 'enzyme';
import CreateMessage from '.';

describe('CreateMessage component', () => {

  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(<CreateMessage submit={submitMock} />);
  });


  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input - textarea', () => {
    expect(component.find('#inputField').length).toEqual(1);
  });

  it('Should have one submit button', () => {
    expect(component.find('.submit-button').length).toEqual(1);
  });

  it('Should call the submit function when clicked', () => {
    const component = mount(<CreateMessage submit={submitMock} />);
    expect(submitMock.mock.calls.length).toEqual(0);
    component.find('form').simulate('submit');
    expect(submitMock.mock.calls.length).toEqual(1);
  })

});
