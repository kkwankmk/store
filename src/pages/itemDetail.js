import React from 'react';
import { Card } from 'antd';

import Content from '../components/Layout/content';
import ItemDetailContainer from '../containers/ItemDetailContainer';

export default () => {
    return (
        <Content>
            <Card title="Edit a item" bordered={false}>
                <ItemDetailContainer />
            </Card>
        </Content>
    );
};
