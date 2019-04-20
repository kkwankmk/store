import React, { Component } from 'react';
import { Form, Button, Row, Modal } from 'antd';
import { withRouter } from 'react-router';

import InputField from '../Form/InputField';
import TextAreaField from '../Form/TextAreaField';

class ItemForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props
                    .onSubmit(values)
                    .then(() => (window.location.href = '/'));
            }
        });
    };

    handelDelete = () => {
        const { item, onDelete } = this.props;
        onDelete(item.id).then(() => (window.location.href = '/'));
    };

    render() {
        const { form, item = {}, isEditing = false } = this.props;

        return (
            <Form layout="horizontal" onSubmit={this.handleSubmit}>
                <InputField
                    form={form}
                    name="title"
                    decorator={{
                        initialValue: item.title,
                        rules: [
                            {
                                required: true,
                                message: 'Please input title!'
                            }
                        ]
                    }}
                    formItemProps={{ label: 'Title' }}
                />
                <TextAreaField
                    form={form}
                    name="description"
                    decorator={{
                        initialValue: item.description,
                        rules: [
                            {
                                required: true,
                                message: 'Please input description!'
                            }
                        ]
                    }}
                    formItemProps={{ label: 'Description' }}
                />

                {isEditing ? (
                    <Row type="flex" justify="space-between">
                        <Button
                            type="danger"
                            ghost
                            onClick={() =>
                                Modal.confirm({
                                    title: 'Are you sure delete this item?',
                                    okText: 'Yes',
                                    okType: 'danger',
                                    cancelText: 'No',
                                    onOk: () => {
                                        this.handelDelete();
                                    }
                                })
                            }
                        >
                            Delete
                        </Button>

                        <div>
                            <Button
                                onClick={() => this.props.history.push('/')}
                                style={{ marginRight: '5px' }}
                            >
                                Cancel
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Edit
                            </Button>
                        </div>
                    </Row>
                ) : (
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                )}
            </Form>
        );
    }
}

export default Form.create({ name: 'horizontal_login' })(withRouter(ItemForm));
