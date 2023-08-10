import React from 'react';
import { shallow } from "enzyme"
import { debug } from 'console';
import { Counter } from '../components/Screen/Counter';

describe("Render Counter", () => {
    test(" Counter test is render  ", () => {
        const component = shallow(<Counter message={`The Count Value is `} />)
        debug(component)
        console.log(component.debug())
        expect(component).toMatchSnapshot()
    })
})