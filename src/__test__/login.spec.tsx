import React from 'react';
import { shallow } from "enzyme"
import { debug } from 'console';
import Login from '../components/Screen/Login';

describe("Render Login", () => {
    test("Login test is render", () => {
        const component = shallow(<Login />)
        debug(component)
        console.log(component.debug())
        expect(component).toMatchSnapshot()
    })
    // test("Can change email field", () => {
    //     expect(wrapper.state("email")).toEqual("");
    //     const input = wrapper.find("input").at(0);
    //     input.simulate("change", {
    //         target: { name: "email", value: newEmail },
    //     });
    //     expect(wrapper.state("email")).toEqual(newEmail);
    // });

    test("Find the Email Label", () => {

    })
})