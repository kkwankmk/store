import axios from 'axios';

export const getItems = () => ({
    type: 'GET_ITEM_LIST',
    payload: axios.get(`http://local.store-lumen.co/item`)
});

export const getItem = id => ({
    type: 'GET_ITEM',
    payload: axios.get(`http://local.store-lumen.co/item/${id}`)
});

export const addItem = values => ({
    type: 'ADD_ITEM',
    payload: axios.post(`http://local.store-lumen.co/item`, values)
});

export const updateItem = (id, values, meta) => ({
    type: 'UPDATE_ITEM',
    payload: axios.put(`http://local.store-lumen.co/item/${id}`, values),
    meta: meta
});

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    payload: axios.delete(`http://local.store-lumen.co/item/${id}`)
});

export const increment = (score = 1) => ({
    type: 'INCREMENT',
    score
});

export const decrement = (score = -1) => ({
    type: 'DECREMENT',
    score
});
