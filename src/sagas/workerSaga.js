import { call, put } from 'redux-saga/effects';
import api from '../api';

export function* callGetUsers(action) {
    try {
         const result = yield call(api.get, action.payload.url);
         yield put({ type:'showdata/SHOW_INFO_SAGA', response: result.data })
    }catch(err) {
         yield console.log("Request Failed!");
    }
}

export function* callDelUsers(action) {
    try {
        const result = yield call(api.delete, '/users/'+action.payload.userId)
        yield put({ type:'showdata/DEL_INFO_SAGA', response: result })
    }catch(err) {
        yield console.log("Request Failed!");
    }
}

export function* callAddUsers(action) {
    try {
        const result = yield call(api.post, 'users', action.payload)
        yield put({ type:'showdata/ADD_INFO_SAGA', response: result.data })
    }catch(err) {
        yield console.log("Request Failed!");
    }
}

export function* callUpdateUsers(action) {
    try {
        const result = yield call(api.put, 'users/'+action.payload.userId, action.payload.usersUpdate)
        yield put({ type:'showdata/ADD_INFO_SAGA', response: result.data })
    }catch(err) {
        yield console.log("Request Failed!");
    }
}