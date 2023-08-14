// src/App.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Action/todoActions";
import { State } from "../Reducer/todoReducer";
import '../css/increment.css';

const IncrementDecrement: React.FC = () => {
    const count = useSelector((state: State) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="IncrementDecrement">
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default IncrementDecrement;
