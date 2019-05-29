import { fork } from 'redux-saga/effects';
import {
    WatchGetUsersSaga,
    WatchDelUserSaga,
    WatchAddUserSaga,
    WatchUpdateUserSaga
} from './watcherSaga';

//root saga
export default function* rootSaga() {
    yield fork(WatchGetUsersSaga)
    yield fork(WatchDelUserSaga)
    yield fork(WatchAddUserSaga)
    yield fork(WatchUpdateUserSaga)
}