import React from 'react';
import { mount } from "enzyme"
import { debug } from 'console';
import IncrementDecrement from '../components/Screen/Increment';
import { Provider } from 'react-redux';
import { Store } from '../components/Store/store';
import { findByTestAttr } from '../../Utils';

const setUp = () => {
    const component = mount(<Provider store={Store}>
        <IncrementDecrement />
    </Provider>);
    return component;
}
describe("Render Increment", () => {
    let component: any;

    beforeEach(() => {
        component = setUp();
    });
    test("increment test is render  ", () => {
        const component = setUp();
        debug(component)
        expect(component).toMatchSnapshot()
    })
    test("renders correctly with initial count", () => {
        const wrapper = setUp();
        expect(wrapper.find("h1").text()).toContain("Count: 0");
    })
    it('calls the increment function when the "Increment" button is clicked', () => {
        const incrementButton = findByTestAttr(component, 'increment-btn');
        expect(incrementButton.exists()).toBe(true);
        incrementButton.simulate('click');
        const wrapper = setUp();
        expect(wrapper.find("h1").text()).toContain("Count: 1");
    });
    it('calls the decrement function when the "Decrement" button is clicked', () => {
        const decrementButton = findByTestAttr(component, 'decrement-btn')
        expect(decrementButton.exists()).toBe(true);
        decrementButton.simulate('click');
        const wrapper = setUp();
        expect(wrapper.find("h1").text()).toContain("Count: 0");
    });
})