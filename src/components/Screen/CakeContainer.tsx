import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../Action/action';
import { State } from '../Reducer/reducer';

type CakeProps = {
    numOfCakes: number;
    buyCake: () => void;
};
class CakeContainer extends Component<CakeProps>{
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ margin: 'auto' }}>
                    <h2 className="default-cake-count" data-test="default-cake-count">Number of Cakes {this.props.numOfCakes}</h2>
                    <button data-test="test-buy-cake" style={{ display: 'flex', margin: 'auto', borderRadius: '4px', textAlign: 'center', color: "white", background: 'blue', padding: '10px', fontSize: '24px', }} onClick={this.props.buyCake}>Buy Cake</button>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state: State) {
    return { numOfCakes: state.numberOfCakes };
}
export default connect(mapStateToProps, { buyCake })(CakeContainer);