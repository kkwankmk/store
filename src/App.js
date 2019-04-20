import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout';
import List from './pages/list';
import Item from './pages/item';
import ItemDetail from './pages/itemDetail';
import CounterPage from './pages/CounterPage';

function AppRouter() {
    return (
        <BrowserRouter>
            <Route path="/" component={Layout} />
            <Route path="/" exact component={List} />
            <Route path="/item" exact component={Item} />
            <Route path="/item/:id" component={ItemDetail} />
            <Route path="/example" component={CounterPage} />
        </BrowserRouter>
    );
}

export default AppRouter;
