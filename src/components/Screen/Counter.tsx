import React from "react";
import { Component } from "react";
type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}
export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div className="counterwrapper" style={{ display: 'flex' }}>
                <div style={{ margin: 'auto' }}>
                    <div data-test='counterdescription' className="counterdescription" style={{ marginTop: '30px' }}>
                        <h2 data-test="label-text">{this.props.message} {this.state.count}</h2> 
                    </div>
                    <button data-test="counter-btn" className="counterBtn" style={{ display: 'flex', margin: 'auto', borderRadius: '4px', marginTop: '10px', textAlign: 'center', color: "white", background: 'blue', padding: '10px', fontSize: '24px', }} onClick={this.handleClick}>Increment</button>
                </div>
            </div>
        )
    }
}