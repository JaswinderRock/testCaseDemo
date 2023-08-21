import React from 'react';
import { mount } from "enzyme"
import { debug } from 'console';
import Login from '../components/Screen/Login';
import { findByClassName } from '../../Utils/index';

const setUp = () => {
    const component = mount(<Login />);
    return component;
}
describe("Render Login", () => {
    let component: any;
    const newEmail = "test@gmail.com";
    const newPassword = "testpassword";
    const wrapper = setUp();
    beforeEach(() => {
        component = setUp();
    });
    test("Login test is render", () => {
        debug(component)
        console.log(component.debug())
        expect(component).toMatchSnapshot()
    }),
        test('Find the Label', () => {
            const wrapper = findByClassName(component, 'Login-label');
            expect(wrapper.length).toBe(1)
        }),
        test("Should Serach for Email and Password label", () => {
            const wrapper = component.find('Email *' && 'Password *');
            debug(wrapper)
        }),
        test("Email input type should by email", () => {
            const wrapper = component.find('email');
            debug(wrapper)
        }),
        test("Should Serach for password input", () => {
            const wrapper = findByClassName(component, 'password-input');
            debug(wrapper)
        }),
        test("Password input type should by password", () => {
            const wrapper = component.find('password');
            debug(wrapper)
        }),
        test("Should Serach for Remeber wrapper ", () => {
            const wrapper = findByClassName(component, 'wrapper-checkbox');
            debug(wrapper)
        }),
        test("Should Serach for submit btn", () => {
            const wrapper = findByClassName(component, 'submit-button')
            debug(wrapper)
        }),
        test("Can change email field", () => {
            expect(wrapper.state("email")).toEqual("");
            const input = wrapper.find("input").at(0);
            input.simulate("change", {
                target: { name: "email", value: newEmail },
            });
            expect(wrapper.state("email")).toEqual(newEmail);
        }),
        test("Can change password field", () => {
            expect(wrapper.state("password")).toEqual("");
            const input = wrapper.find("input").at(1);
            input.simulate("change", {
                target: { name: "password", value: newPassword },
            });
            expect(wrapper.state("password")).toEqual(newPassword);
        }),
        test("Will not sign in if no provided email/password", () => {
            const signInButton = wrapper.find('submit-button').at(0)
            debug(signInButton)
            expect(wrapper.state("email")).toEqual("test@gmail.com")
            expect(wrapper.state("password")).toEqual("testpassword");
        })
})