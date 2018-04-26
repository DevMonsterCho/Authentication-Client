import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS, Record } from 'immutable';
import { pender } from 'redux-pender';
import * as blogApi from 'lib/api/blog';

// action types
const GET_BLOG_LIST_ALL = 'blog/GET_BLOG_LIST_ALL';
const POST_BLOG_WRITE = 'blog/POST_BLOG_WRITE';

// action creators
export const getBlogListAll = createAction(GET_BLOG_LIST_ALL, blogApi.getBlogListAll);
export const postBlogWrite = createAction(POST_BLOG_WRITE, blogApi.postBlogWrite);

// initial state
const initialState = Map({
    list: List(),
    view: Map({
        _id: '',
        writerEmail: '',
        writerName: '',
        title: '',
        text: '',
        md: '',
        files: List(),
        createDate: '',
    })
});

// reducer
export default handleActions({
    ...pender({ /** GET_BLOG_LIST_ALL */
        type: GET_BLOG_LIST_ALL,
        onSuccess: (state, action) => { 
            console.log(action.payload);
            return state.set('list', fromJS(action.payload.list));
        },
        onFailure: (state, action) => {
            console.log(action);
            return state;
        },
        onError: (state, action) => {  // 에러 발생 시
            console.log(action);
            return state;
        }
    }),
    ...pender({ /** POST_BLOG_WRITE */
        type: POST_BLOG_WRITE,
        onSuccess: (state, action) => {
            console.log(action);
            return state;
        },
        onFailure: (state, action) => {
            console.log(action);
            return state;
        },
        onError: (state, action) => {  // 에러 발생 시
            console.log(action);
            return state;
        }

    })
}, initialState)







