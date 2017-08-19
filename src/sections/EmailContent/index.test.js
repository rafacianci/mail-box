import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import EmailContent from './';

describe('EmailContent', () => {
  const mockStore = configureStore();

  it('should returns null', () => {
    const initialState = { email: {} };
    const store = mockStore(initialState);
    const element = shallow(<EmailContent store={store} />);

    const divs = element.find('div');
    expect(divs.length).toBe(0);
  });

  it('should returns a div when there is a selected message', () => {
    const initialState = { email: { selectedMessage: { teste: 'kakaroto' } } };
    const store = mockStore(initialState);
    const element = shallow(<EmailContent message={{ test: 'teste' }} store={store} />);

    expect(element.node.props.message).toEqual({ teste: 'kakaroto' });
  });
});
