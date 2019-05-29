import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import axiosMiddleware from 'redux-axios-middleware';

import { reducer } from './reducer';
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore (
    reducer,
    composeWithDevTools(
            applyMiddleware(
                sagaMiddleware, axiosMiddleware()
            )
        )
)

sagaMiddleware.run(rootSaga);