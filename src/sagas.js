import { put, takeEvery} from 'redux-saga/effects'
import {fetchFailureAction, fetchSuccessAction} from "../../redux";




function* fetchRequest(action)  {
    const url = `https://pokeapi.co/api/v2/pokemon/${action.id}`;
    try {
        const pokemon = yield fetch(url)
            .then(response => response.json(), );
        yield put(fetchSuccessAction(action.id, pokemon))
    } catch (error) {
        yield put(fetchFailureAction(action.id, error))
    }
}

export function* watchFetchRequest() {
    yield takeEvery('FETCH_REQUEST', fetchRequest)
}