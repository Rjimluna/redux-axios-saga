import { combineReducers } from 'redux';

import showinfoDucks from './pages/showData/ducks'

export const reducer = combineReducers ({
    usersinfo: showinfoDucks
})