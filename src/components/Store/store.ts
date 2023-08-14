import { createStore } from 'redux';
import { cakeReducer } from '../Reducer/cakeReducer';
import reducer from '../Reducer/incrementReducer';

export const incrementStore = createStore(reducer)
export const Store = createStore(cakeReducer);