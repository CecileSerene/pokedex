import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import App from './App.js'
import * as Redux from "redux";
import {watchFetchRequest} from "./sagas";
import {applyMiddleware} from "redux";

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchRequestAction = (idPokemon) => {
    return {type: FETCH_REQUEST, id: idPokemon}
};

export const fetchSuccessAction = (pokemon) => {
    return { response: pokemon,
        type: FETCH_SUCCESS}
};

const fetchFailureAction = (responseError) => {
    return { error: responseError,
        type: FETCH_FAILURE}
};

const pokemonReducer = (state= {}, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return state;
        case FETCH_SUCCESS:
            return {...state, [action.response.id]: action.response};
        case FETCH_FAILURE:
            return action.error;
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();

export const pokemonStore = Redux.createStore(
    pokemonReducer,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchRequest);
