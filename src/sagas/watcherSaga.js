import { takeEvery } from 'redux-saga/effects';
import { 
    callGetUsers,
    callDelUsers,
    callAddUsers,
    callUpdateUsers
 } from './workerSaga';

export function* WatchGetUsersSaga() {
    yield takeEvery('showdata/SHOW_INFO', callGetUsers);
}

export function* WatchDelUserSaga() {
    yield takeEvery('showdata/DEL_INFO', callDelUsers);
}

export function* WatchAddUserSaga() {
    yield takeEvery('showdata/ADD_INFO', callAddUsers)

}
export function* WatchUpdateUserSaga() {
    yield takeEvery('showdata/UPDATE_INFO', callUpdateUsers)
}