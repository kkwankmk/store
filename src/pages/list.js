import React from 'react';
import { Row, Button } from 'antd';

import Content from '../components/Layout/content';
import ListContainer from '../containers/ListContainer';

const ListPage = () => {
    return (
        <Content>
            <Row type="flex" justify="end">
                <Button type="primary" href="/item" icon="plus">
                    ADD NEW ITEM
                </Button>
            </Row>
            <ListContainer />
        </Content>
    );
};

export default ListPage;
