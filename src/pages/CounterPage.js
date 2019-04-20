import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const App = ({ counter, increment, decrement }) => (
    <div className="container">
        <div>
            <h1>Counter : {counter}</h1>
        </div>

        <div className="row">
            {/* increment */}
            <div className="col-1">
                <button className="btn btn-success" onClick={() => increment(1)}> +1 </button>
            </div>

            <div className="col-1">
                <button className="btn btn-success" onClick={() => increment(2)}> +2 </button>
            </div>

            <div className="col-1">
                <button className="btn btn-success" onClick={() => increment(3)}> +3 </button>
            </div>

            {/* decrement */}
            <div className="col-1">
                <button className="btn btn-danger" onClick={() => decrement(1)}> -1 </button>
            </div>

            <div className="col-1">
                <button className="btn btn-danger" onClick={() => decrement(2)}> -2 </button>
            </div>

            <div className="col-1">
                <button className="btn btn-danger" onClick={() => decrement(3)}> -3 </button>
            </div>
        </div>
    </div>
);

const mapStateToProps = function(state) {
    return {
        counter: state.counters || 0
    };
};

const AppWithConnect = connect(
    mapStateToProps,
    { increment, decrement }
)(App);

export default AppWithConnect;