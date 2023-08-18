import React from 'react';
import { mount, shallow } from "enzyme"
import ToDoClass from '../components/Screen/ToDoClass';
import { Provider } from 'react-redux';
import { Store } from '../components/Store/store';

const setUp = () => {
    const component = mount(<Provider store={Store}>
        <ToDoClass />
    </Provider>);
    return component;
}

describe("Render TodoClass", () => {
    let component: any;
    const wrapper = setUp();
    beforeEach(() => {
        component = setUp();
    }),
    test("TodoList test is render  ", () => {
        const component = setUp()
        expect(component).toMatchSnapshot()
    })
    test('renders input and submit button', () => {
        expect(wrapper.find('input'));
        expect(wrapper.find('button[type="button"]'));
    })
    test('serach for label', () => {
        const wrapper = setUp();
        expect(wrapper.find("h3").text()).toContain("Hi i am todo");
    })

})