export enum ActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    SET_NAME = "SET_NAME",
}

export const increment = () => ({
    type: ActionType.INCREMENT,
});

export const decrement = () => ({
    type: ActionType.DECREMENT,
});

export const addName = (payload: any) => ({
    type: ActionType.SET_NAME,
    payload: payload,
});
