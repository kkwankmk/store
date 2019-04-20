import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import TableItem from '../components/Item/TableItem';
import { getItems } from '../actions';

class ListContainer extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { list, loading } = this.props.item;

        if (loading) return <Spin />;

        return <TableItem data={list} />;
    }
}

const mapStateToProps = state => {
    return {
        item: state.item
    };
};

export default connect(
    mapStateToProps,
    { getItems }
)(ListContainer);
