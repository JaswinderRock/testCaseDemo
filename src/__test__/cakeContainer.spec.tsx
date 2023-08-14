import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CakeContainer from '../components/Screen/CakeContainer';
import { debug } from 'console';
import { Provider } from 'react-redux';
import { Store } from '../components/Store/store';
import configureStore from 'redux-mock-store';


describe("Render CakeContainer ", () => {
    let wrapper: ShallowWrapper;
    const mockStore = configureStore();
    const store = mockStore({ numberOfCakes: 10 });

    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <CakeContainer />
            </Provider>
        );
    });
    test("CakeContainer Test", () => {
        const Component = shallow(<CakeContainer />)
        debug(Component);
        expect(Component).toMatchSnapshot()
    }),
        test('should render with correct number of cakes', () => {
            expect(wrapper.find('h2').text()).toEqual(`Number of Cakes ${10}`);
        });

})