import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import Container from './container';

const { Header } = Layout;

const HeaderStyled = styled(Header)`
    background-color: #7dbcea !important;
    color: #fff;
`;

export default () => {
    return (
        <div>
            <Layout>
                <HeaderStyled><Container>STORE</Container></HeaderStyled>
            </Layout>
        </div>
    );
};
