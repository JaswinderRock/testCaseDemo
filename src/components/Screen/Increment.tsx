import React, { Component } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Action/action";
import '../css/increment.css';
import { connect } from "react-redux";

type IncrementProps = {
    count: number;
    increment: () => void;
    decrement: () => void;

};
class IncrementDecrement extends Component<IncrementProps> {
    // state = {
    //     count: 0
    // };
    handleClick = () => {
        this.props.increment()
        // this.setState({ count: this.state.count + 1 })
    }
    handleDecrement = () => {
        this.props.decrement()

        // this.setState({ count: this.state.count - 1 })
    }
    // const count = useSelector((state: State) => state.count);
    // const dispatch = useDispatch();
    render(): React.ReactNode {
    return (
        <div className="IncrementDecrement">
            <h1>Count: {this.props.count}</h1>
            <button style={{ background: 'blue', color: 'white', fontSize: '18px', borderRadius: '4px', padding: '8px' }} onClick={this.handleClick}>Increment</button>
            <button style={{ background: 'blue', color: 'white', fontSize: '18px', marginLeft: '10px', borderRadius: '4px', padding: '8px' }} onClick={this.handleDecrement}>Decrement</button>
        </div>
    );
    }
};

function mapStateToProps(state: any) {
    return { count: state.count };
}
export default connect(mapStateToProps, { increment, decrement })(IncrementDecrement);
