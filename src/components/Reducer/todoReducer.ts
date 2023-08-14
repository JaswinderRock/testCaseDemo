import { ActionType } from "../Action/todoActions";

export interface State {
    count: number;
}

const initialState: State = {
    count: 0,
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
        default:
            return state;
    }
};

export default reducer;
