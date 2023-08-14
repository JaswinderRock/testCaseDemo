export enum ActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    SET_NAME = "SET_NAME",
    BUY_CAKE = 'BUY_CAKE'
}

export const increment = () => ({
    type: ActionType.INCREMENT,
});

export const decrement = () => ({
    type: ActionType.DECREMENT,
});

export const setName = (payload: any) => ({
    type: ActionType.SET_NAME,
    payload: payload,
});

export const buyCake = () => ({
    type: ActionType.BUY_CAKE,
});
