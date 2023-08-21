import React from 'react';
import { mount } from 'enzyme';
import CakeContainer from '../components/Screen/CakeContainer';
import { debug } from 'console';
import { Provider } from 'react-redux';
import { Store } from '../components/Store/store';
import { findByClassName, findByTestAttr } from '../../Utils';

const setUp = () => {
    const component = mount(<Provider store={Store}>
        <CakeContainer />
    </Provider>);
    return component;
}

describe("Render CakeContainer ", () => {
    let component: any;
    beforeEach(() => {
        component = setUp();
    });

    test("CakeContainer Test", () => {
        debug(component);
        expect(component).toMatchSnapshot()
    })

    test('should render with correct number of cakes', () => {
        const wrapper = findByClassName(component, 'default-cake-count');
        expect(wrapper.length).toBe(1)
        const expectedText = "Number of Cakes 10";
        const receivedText = wrapper.text().trim();
        expect(expectedText).toEqual(receivedText)
    });
    test('should call buyCake prop function when the Buy Cake button is clicked', () => {
        const buyCake = findByTestAttr(component, 'test-buy-cake')
        expect(buyCake.exists()).toBe(true);
        buyCake.simulate('click');
        expect(component.find('h2').text()).toContain(`Number of Cakes ${9}`);
        });

})