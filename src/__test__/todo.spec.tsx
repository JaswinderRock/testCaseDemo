import React from 'react';
import { shallow } from "enzyme"
import { debug } from 'console';
import ToDoClass from '../components/Screen/ToDoClass';

describe("Render TodoClass", () => {
    test("TodoList test is render  ", () => {
        const component = shallow(<ToDoClass />)
        debug(component)
        expect(component).toMatchSnapshot()
    })
})