import React, { Component } from "react";
import { increment, decrement } from "../Action/action";
import '../css/increment.css';
import { connect } from "react-redux";
import { State } from "../Reducer/reducer";

type IncrementState = {
    count: number;
    increment: () => void;
    decrement: () => void;
};
type incrementProps = {
    handleClick: () => void
}
class IncrementDecrement extends Component<IncrementState, incrementProps> {
    handleClick = () => {
        this.props.increment()
    }
    handleDecrement = () => {
        this.props.decrement()
    }
    render(): React.ReactNode {
    return (
        <div className="IncrementDecrement">
            <h1 data-test="Count-Text" className="Count-Text">Count: {this.props.count}</h1>
            <button data-test="increment-btn" className="Increment-btn" type="button" style={{ background: 'blue', color: 'white', fontSize: '18px', borderRadius: '4px', padding: '8px' }} onClick={this.handleClick}>Increment</button>
            <button data-test="decrement-btn" className="decrement-btn" style={{ background: 'blue', color: 'white', fontSize: '18px', marginLeft: '10px', borderRadius: '4px', padding: '8px' }} onClick={this.handleDecrement}>Decrement</button>
        </div>
    );
    }
};

function mapStateToProps(state: State) {
    return { count: state.count };
}
export default connect(mapStateToProps, { increment, decrement })(IncrementDecrement);
