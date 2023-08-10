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
            <div style={{ display: 'flex' }}>
                <div style={{ margin: 'auto', marginTop: '20px' }}>
                    <button id={"data-test-increment-btn"} style={{ display: 'flex', margin: 'auto', borderRadius: '4px', textAlign: 'center', color: "white", background: 'blue', padding: '10px', fontSize: '24px', }} onClick={this.handleClick}>Increment</button>
                    <div style={{ marginTop: '30px', fontSize: '20px' }}>
                        {this.props.message} {this.state.count}
                    </div>
                </div>
            </div>
        )
    }

}