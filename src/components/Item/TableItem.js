import React from 'react';
import styled from 'styled-components';
import { Table, Icon } from 'antd';

const TableStyled = styled(Table)`
    margin-top: 15px;

    tbody {
        background: #fff;
    }
`;

export default ({ data }) => {
    const columns = [
        { title: 'Title', dataIndex: 'title' },
        { title: 'Description', dataIndex: 'description' },
        {
            title: 'Action',
            dataIndex: 'id',
            render: id => (
                <Icon
                    type="edit"
                    theme="filled"
                    onClick={() => (window.location = `/item/${id}`)}
                />
            )
        }
    ];

    return (
        <TableStyled
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey="id"
        />
    );
};
