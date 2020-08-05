import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';

import App from './App';
import './styles/app.less';
import * as serviceWorker from './serviceWorker';
import errorMiddleware from './errorMiddleware';

const logger = store => next => action => {
    console.group(action.type);
    console.log('current state', store.getState());
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

const middlewares = [thunk, errorMiddleware, promise, logger];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const MyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
