import React from 'react';
import { shallow } from "enzyme"
import { debug } from 'console';
import Login from '../components/Screen/Login';
import { findByClassName } from '../../Utils/index';

const setUp = () => {
    const component = shallow(<Login />);
    return component;
}
describe("Render Login", () => {
    let component: any;
    beforeEach(() => {
        component = setUp();
    });
    test("Login test is render", () => {
        const component = shallow(<Login />)
        debug(component)
        console.log(component.debug())
        expect(component).toMatchSnapshot()
    }),
        test('Should Serach for Wrapper div', () => {
            const wrapper = findByClassName(component, 'wrapper-div');
            expect(wrapper.length).toBe(1)
        }),
        test('Serach for Wrapper div', () => {
            const wrapper = findByClassName(component, 'login-form');
            expect(wrapper.length).toBe(1)
        }),
        test('Find the Label', () => {
            const wrapper = findByClassName(component, 'Login-label');
            expect(wrapper.length).toBe(1)
        }),
        test('Serach for email wrapper', () => {
            const wrapper = findByClassName(component, 'email-wrapper');
            expect(wrapper.length).toBe(1)
        }),
        test("Should Serach for Email and Password label", () => {
            const wrapper = component.find('Email *' && 'Password *');
            debug(wrapper)
        }),
        test("Should Serach for Email input", () => {
            const wrapper = component.find('.email-input');
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
        test(" Should Serach for Remeber wrapper ", () => {
            const wrapper = findByClassName(component, 'wrapper-checkbox');
            debug(wrapper)
        }),
        test("Should Serach for submit btn", () => {
            const wrapper = findByClassName(component, 'submit-button')
            debug(wrapper)
        })
})