import React from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

const FormItem = Form.Item;

const FormItemStyled = styled(FormItem)`
    .ant-form-item-label {
        text-align: left;
    }
`;

const ItemField = ({
    form,
    name,
    decorator = {},
    controlProps = {},
    formItemProps = {}
}) => {
    const { getFieldDecorator } = form;

    return (
        <FormItemStyled
            colon={false}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 10 }}
            {...formItemProps}
        >
            {getFieldDecorator(name, decorator)(<Input {...controlProps} />)}
        </FormItemStyled>
    );
};

export default ItemField;
