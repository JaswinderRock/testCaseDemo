import React, { Component } from "react";
import { connect } from "react-redux";
import { setName } from '../Action/action';

type TodoProps = {
    setName: (a: string) => void;
    reduxList: Array<String>;
};
type TodoState = {
    name: String;
};
class ToDoClass extends Component<TodoProps, TodoState> {
    state = {
        name: "",
    };
    handleClick = () => {
        if (!this.state.name.trim()) {
            alert("Empty text can't be added into redux");
        }
        this.props.setName(this.state.name);
        this.setState({ name: "" });
    };
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ margin: 'auto' }}>
                    <h3 style={{ marginTop: '60px' }}>Hi i am todo</h3>
                    <input
                        style={{ padding: '10px' }}
                        value={this.state.name}
                        type="text"
                        placeholder="enter your list value here! "
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <br />
                    <button
                        type="button"
                        onClick={this.handleClick}
                        style={{ height: 45, width: 120, backgroundColor: "blue", color: 'white', marginTop: '10px', fontSize: '20px', borderRadius: '4px' }}
                    >
                        Submit
                    </button>
                    <br />
                    {this.props.reduxList.map((item, index) => (
                        <div key={index} style={{ fontSize: '20px' }}>
                            {item} <br />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state: any) {
    return { reduxList: state.nameList };
}
export default connect(mapStateToProps, { setName })(ToDoClass);
