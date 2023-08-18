import React, { Component } from 'react';
import { shallow } from "enzyme"
import { Counter } from '../components/Screen/Counter';
import { findByClassName, findByTestAttr } from '../../Utils/index';

const setUp = () => {
    const component = shallow(<Counter message={`The Count Value is `} />);
    return component;
}

describe("Render Counter", () => {
    let component: any;
    beforeEach(() => {
        component = setUp();
    }),
    test("Counter test is render ", () => {
        expect(component).toMatchSnapshot()
    }),
        test("Should check for ClassName ", () => {
            const wrapper = findByClassName(component, 'counterwrapper')
            expect(wrapper.length).toBe(1)
        }),
        test("Should check for the header tag ", () => {
            const wrapper = findByTestAttr(component, 'counterdescription')
            expect(wrapper.length).toBe(1)
        }),
        test("Should check for button ClassName ", () => {
            const wrapper = findByClassName(component, 'counterBtn')
            expect(wrapper.length).toBe(1)
        }),
        test("renders correctly with initial count", () => {
            const labelText = findByTestAttr(component, 'label-text');
            const expectedText = "The Count Value is  0";
            const receivedText = labelText.find("h2").text().trim();
            expect(receivedText).toContain(expectedText);
        }),
        it('click the counter button to increment the value ', () => {
            const counterButton = findByTestAttr(component, 'counter-btn');
            expect(counterButton.exists()).toBe(true);
            counterButton.simulate('click');
            const expectedText = "The Count Value is  1";
            const labelText = findByTestAttr(component, 'label-text');
            const receivedText = labelText.find("h2").text().trim();
            expect(receivedText).toContain(expectedText);
        })
})