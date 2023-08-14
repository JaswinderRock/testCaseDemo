import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../Action/cakeAction';

type CakeProps = {
    numOfCakes: Array<number>;
    // buyCake: (a: string) => void;
};
class CakeContainer extends Component<CakeProps>{
    render() {
        return (
            <div>
                <h2>Number of Cakes {this.props.numOfCakes}</h2>
                {/* <button onClick={this.props.buyCake}>Buy Cake</button> */}
            </div>
        )

    }
}
function mapStateToProps(state: any) {
    return { numOfCakes: state.numOfCakes };
}
// function mapDipatchTpProps() {
//     return {
//         buyCake: () => dispatchEvent(buyCake())
//     };
// }
export default connect(mapStateToProps)(CakeContainer);