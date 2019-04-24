import React from 'react';
import createSagaMiddleware from 'redux-saga'

import * as Redux from "redux";
import {watchFetchRequest} from "./components/Pokemon/sagas";
import {applyMiddleware} from "redux";

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchRequestAction = (idPokemon) => {
    return {type: FETCH_REQUEST, id: idPokemon}
};

export const fetchSuccessAction = (pokemonId, pokemon) => {
    return { response: pokemon,
        id: pokemonId,
        type: FETCH_SUCCESS}
};

export const fetchFailureAction = (pokemonId, responseError) => {
    return { error: responseError,
        type: FETCH_FAILURE}
};

const pokemonReducer = (state= {}, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return state;
        case FETCH_SUCCESS:
            return {
                ...state, [action.id]: {success: true, info: action.response}
            };
        case FETCH_FAILURE:
            return {
                ...state, [action.id]: {success: false, error: action.error}
            };
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();

export const pokemonStore = Redux.createStore(
    pokemonReducer,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchRequest);
