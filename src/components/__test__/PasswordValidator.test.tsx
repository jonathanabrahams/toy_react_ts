import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
Enzyme.configure({adapter: new Adapter()});

describe('Setup test', () => {
  it('should ', () => {
    const wrapper = Enzyme.shallow(<div>Hello</div>);
    expect(wrapper.find('div').exists()).toBe(true);
  })
  
})
