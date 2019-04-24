import { put, takeEvery, call} from 'redux-saga/effects'
import {fetchSuccessAction} from "./redux";




function* fetchRequest(action)  {
    console.log('api call');
    const url = `https://pokeapi.co/api/v2/pokemon/${action.id}`;
    const pokemon = yield fetch(url)
        .then(response => response.json(), );
    console.log("pokemon", pokemon);
    yield put(fetchSuccessAction(pokemon))
}

export function* watchFetchRequest() {
    console.log('watch');
    yield takeEvery('FETCH_REQUEST', fetchRequest)
}