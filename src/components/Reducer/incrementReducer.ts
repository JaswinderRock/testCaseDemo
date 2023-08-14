import { ActionType } from "../Action/todoActions";

export interface State {
    count: number;
    nameList: Array<String>;
}

const initialState: State = {
    count: 0,
    nameList: [],
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case ActionType.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case ActionType.SET_NAME:
            return {
                ...state,
                nameList: [...state.nameList, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
