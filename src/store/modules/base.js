import { createAction, handleActions } from 'redux-actions';

import { Map, Record } from 'immutable';
import { pender } from 'redux-pender';
import * as authApi from 'lib/api/auth';

// action types
const GET_AUTH_CHECK = 'base/GET_AUTH_CHECK';
const SET_AUTH_ERROR = 'base/SET_AUTH_ERROR';
const POST_AUTH_JOIN = 'base/POST_AUTH_JOIN';
const POST_AUTH_LOGIN = 'base/POST_AUTH_LOGIN';
const POST_AUTH_LOGOUT = 'base/POST_AUTH_LOGOUT';
const POST_AUTH_MODIFY = 'base/POST_AUTH_MODIFY';
const SET_NAME = 'SET_NAME';
const SET_EMAIL = 'SET_EMAIL';

// action creators
export const getAuthCheck = createAction(GET_AUTH_CHECK, authApi.getAuthCheck);
export const setAuthError = createAction(SET_AUTH_ERROR);
export const postAuthLogin = createAction(POST_AUTH_JOIN, authApi.postAuthLogin);
export const postAuthJoin = createAction(POST_AUTH_LOGIN, authApi.postAuthJoin);
export const postAuthLogout = createAction(POST_AUTH_LOGOUT, authApi.postAuthLogout);
export const postAuthModify = createAction(POST_AUTH_MODIFY, authApi.postAuthModify);

export const setName = createAction(SET_NAME);
export const setEmail = createAction(SET_EMAIL);


// initial state
const initialState = Map({
    user: Map({
        email: 'guest',
        name: 'guest',
        error: ''
    })
});

// reducer
export default handleActions({
    [SET_NAME] : (state, action) => {
        console.log('action ::: ', action);
        return state.setIn(['user', 'error'], 'wow')
    },
    [SET_EMAIL] : (state, action) => {
        console.log('action ::: ', action);
        return state.setIn(['user', 'error'], 'wow')
    },
    [SET_AUTH_ERROR] : (state, action) => {
        console.log('action ::: ', action);
        return state.setIn(['user', 'error'], 'wow')
    },
    ...pender({
        type: GET_AUTH_CHECK,
        onSuccess: (state, action) => {  // 로그인 성공 시
            console.log(action);
            const { name, email } = action.payload;
            return state.setIn(['user', 'name'], action.payload.name)
                        .setIn(['user', 'email'], action.payload.email)
        },
        onError: (state, action) => {  // 에러 발생 시
            console.log(action);
            return state.setIn(['user', 'name'], 'Error')
                        .setIn(['user', 'email'], null)
        }
    }),
    ...pender({
        type: POST_AUTH_JOIN,
        onSuccess: (state, action) => {
            console.log('POST_AUTH_JOIN - onSuccess :', action);
            const { error, user } = action.payload;
            return state.setIn(['user', 'name'], user.name)
                        .setIn(['user', 'email'], user.email)
                        .setIn(['user', 'error'], error)
        },
        onError: (state, action) => {
            console.log('POST_AUTH_JOIN - onError :', action);
            const { error, user } = action.payload;
            return state.setIn(['user', 'name'], user.name)
                        .setIn(['user', 'email'], user.email)
                        .setIn(['user', 'error'], error)

        }
    }),
    ...pender({
        type: POST_AUTH_MODIFY,
        onSuccess: (state, action) => {
            console.log('POST_AUTH_MODIFY - onSuccess :', action);
            const { error, user } = action.payload;
            return state.setIn(['user', 'name'], user.name)
                        .setIn(['user', 'email'], user.email)
                        .setIn(['user', 'error'], error)
        },
        onError: (state, action) => {
            console.log('POST_AUTH_MODIFY - onError :', action);
            const { error, user } = action.payload;
            return state.setIn(['user', 'name'], user.name)
                        .setIn(['user', 'email'], user.email)
                        .setIn(['user', 'error'], error)

        }
    }),
    ...pender({
        type: POST_AUTH_LOGIN,
        onSuccess: (state, action) => {
            console.log('POST_AUTH_LOGIN - onSuccess :', action);
            const { error, user } = action.payload;
            return state.setIn(['user', 'name'], user.name)
                        .setIn(['user', 'email'], user.email)
                        .setIn(['user', 'error'], error)
        },
        onError: (state, action) => {
            console.log('POST_AUTH_LOGIN - onError :', action);
            const { error, user } = action.payload;
            return state.setIn(['user', 'name'], user.name)
                        .setIn(['user', 'email'], user.email)
                        .setIn(['user', 'error'], error)

        }
    }),
    ...pender({
        type: POST_AUTH_LOGOUT,
        onSuccess: (state, action) => {
            console.log('POST_AUTH_LOGOUT - onSuccess :', action);
            return initialState;
        },
        onError: (state, action) => {
            console.log('POST_AUTH_LOGOUT - onError :', action);
            return state;

        }
    }),
    
}, initialState)







