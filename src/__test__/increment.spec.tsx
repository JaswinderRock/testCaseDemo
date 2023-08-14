import React from 'react';
import { ShallowWrapper, shallow } from "enzyme"
import { debug } from 'console';
import IncrementDecrement from '../components/Screen/Increment';
import { Provider } from 'react-redux';
import { Store } from '../components/Store/store';

describe("Render Increment", () => {
    let wrapper: ShallowWrapper;
    shallow(
        <Provider store={Store}>
            <IncrementDecrement />
        </Provider>
    )
    test("increment test is render  ", () => {
        const component = shallow(<IncrementDecrement />)
        debug(component)
        expect(component).toMatchSnapshot()
    })
    test("renders correctly with initial count", () => {
        const wrapper = shallow(<IncrementDecrement />);
        expect(wrapper.find("h1").text()).toContain("Count: 0");
    });
})