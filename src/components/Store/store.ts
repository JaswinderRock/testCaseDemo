import { createStore } from 'redux';
import reducer from '../Reducer/reducer';

export const Store = createStore(reducer);