import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import Container from './container';

const { Content } = Layout;

const ContentStyled = styled(Content)`
    padding: 25px;
    min-height: 100vh !important;
`;

export default props => {
    return (
        <div>
            <Layout>
                <ContentStyled>
                    <Container>{props.children}</Container>
                </ContentStyled>
            </Layout>
        </div>
    );
};
