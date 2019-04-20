import { notification } from 'antd';

export default () => next => action => {
    const { type, meta } = action;

    if (type.includes('_REJECTED')) {
        notification.error({
            message: 'Something went wrong',
            description: meta
                ? meta.msgFailure
                : 'Unexpected error. Please contact admin',
            duration: 5,
            className: 'notification-error'
        });
    }

    return next(action);
};
