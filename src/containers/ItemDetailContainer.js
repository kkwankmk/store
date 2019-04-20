import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { updateItem, getItem, deleteItem } from '../actions';
import ItemForm from '../components/Item/ItemForm';

class ItemCreateContainer extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getItem(id);
    }

    render() {
        const { item } = this.props;
        const meta = {
            msgFailure: 'Title is already existed'
        };
        return (
            <ItemForm
                onSubmit={values =>
                    this.props.updateItem(item.id, values, meta)
                }
                onDelete={this.props.deleteItem}
                item={item}
                isEditing
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.detail.item
    };
};

export default connect(
    mapStateToProps,
    { updateItem, getItem, deleteItem }
)(withRouter(ItemCreateContainer));
