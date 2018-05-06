import { configure, shallow } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import PasswordInput from '../PasswordInput'
configure({ adapter: new Adapter() });

describe('(Component) <PasswordInput/>', () => {
    it('should render w/o crashing', () => {
        const wrapper = shallow(
            <PasswordInput />
        );
        expect(wrapper.exists()).toBe(true);
    });

    it('should call onChange', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <PasswordInput onChange={onChange} />
        );
        const input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        const password = "MyPass";
        const event = {
            target: { value: password }
        }
        input.simulate('change', event);
        expect(onChange.call.length).toBe(1);
    })
})