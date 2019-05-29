const initialState = {
    users: []
}

const SHOW_INFO = 'showdata/SHOW_INFO';
const SHOW_INFO_SAGA = 'showdata/SHOW_INFO_SAGA';
export function fetchUsersData() {
    return {
        type: SHOW_INFO,
        payload: {
            url: 'users'
        }
    }
}

const ADD_INFO = 'showdata/ADD_INFO';
const ADD_INFO_SAGA = 'showdata/ADD_INFO_SAGA'
export function addUserData(usersInfo) {
    return {
        type: ADD_INFO,
        payload: usersInfo
    }
}

const DEL_INFO = 'showdata/DEL_INFO';
export function delUserData(userId) {
    return {
        type: DEL_INFO,
        payload: {
            userId
        }
    }
}

const UPDATE_INFO = 'showdata/UPDATE_INFO';
const UPDATE_INFO_SAGA = 'showdata/UPDATE_INFO_SAGA'
export function updateUserData(userId, usersUpdate) {
    return {
        type: UPDATE_INFO,
        payload: {
            userId,
            usersUpdate
        }
    }
}


export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_INFO_SAGA:
            return {
                ...state,
                users: action.response
            }
        
        case ADD_INFO_SAGA:
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        name: action.response.name,
                        age: action.response.age,
                        contact: action.response.contact,
                        address: action.response.address
                    }
                ]
            }

        case UPDATE_INFO_SAGA:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.response
                ]
            }

        default:
            return state
    }
}