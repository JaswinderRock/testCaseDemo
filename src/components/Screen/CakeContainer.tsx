import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../Action/action';

type CakeProps = {
    numOfCakes: number;
    buyCake: () => void;
};
class CakeContainer extends Component<CakeProps>{
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ margin: 'auto' }}>
                    <h2>Number of Cakes {this.props.numOfCakes}</h2>
                    <button style={{ display: 'flex', margin: 'auto', borderRadius: '4px', textAlign: 'center', color: "white", background: 'blue', padding: '10px', fontSize: '24px', }} onClick={this.props.buyCake}>Buy Cake</button>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state: any) {
    return { numOfCakes: state.numberOfCakes };
}
export default connect(mapStateToProps, { buyCake })(CakeContainer);