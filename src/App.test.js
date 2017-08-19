import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App', () => {
  const element = shallow(<App />);

  it('always renders a div', () => {
    const divs = element().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
