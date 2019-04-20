import React from 'react';
import { Card } from 'antd';

import Content from '../components/Layout/content';
import ItemCreateContainer from '../containers/ItemCreateContainer';

export default () => {
    return (
        <Content>
            <Card title="Create a new item" bordered={false}>
                <ItemCreateContainer />
            </Card>
        </Content>
    );
};
