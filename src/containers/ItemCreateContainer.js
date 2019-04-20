import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions';
import ItemForm from '../components/Item/ItemForm';

class ItemCreateContainer extends Component {
    render() {
        return <ItemForm onSubmit={this.props.addItem} />;
    }
}

export default connect(
    null,
    { addItem }
)(ItemCreateContainer);
