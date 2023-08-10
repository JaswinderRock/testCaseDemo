import React from 'react';
import { shallow } from "enzyme"
import { Login } from "../components/Screen/Login"
import { debug } from 'console';

describe("Render login", () => {
    test(" Login test is render  ", () => {
        const component = shallow(<Login />)
        debug(component)
        console.log(component.debug())
        expect(component).toMatchSnapshot()
    })
})
