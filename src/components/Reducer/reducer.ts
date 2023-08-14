import { ActionType } from "../Action/action";

export interface State {
    count: number;
    nameList: Array<String>;
    numberOfCakes: number;
}

const initialState: State = {
    count: 0,
    nameList: [],
    numberOfCakes: 10
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
        case ActionType.BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default:
            return state;
    }
};

export default reducer;
