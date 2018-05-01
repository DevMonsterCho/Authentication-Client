import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS, Record } from 'immutable';
import { pender } from 'redux-pender';
import * as blogApi from 'lib/api/blog';
import * as fileApi from 'lib/api/file';

// action types
const GET_BLOG_ITEM = 'blog/GET_BLOG_ITEM';
const GET_BLOG_LIST_ALL = 'blog/GET_BLOG_LIST_ALL';
const POST_BLOG_WRITE = 'blog/POST_BLOG_WRITE';

const GET_FILE_LIST = 'blog/GET_FILE_LIST';
const POST_FILE_UPLOAD = 'blog/POST_FILE_UPLOAD';

// action creators
export const getBlogItem = createAction(GET_BLOG_ITEM, blogApi.getBlogItem);
export const getBlogListAll = createAction(GET_BLOG_LIST_ALL, blogApi.getBlogListAll);
export const postBlogWrite = createAction(POST_BLOG_WRITE, blogApi.postBlogWrite);

export const getFileList = createAction(GET_FILE_LIST , fileApi.getFileList);
export const postFileUpload = createAction(POST_FILE_UPLOAD, fileApi.postFileUpload);

// initial state
const initialState = Map({
    list: List(),
    view: Map({
        _id: '',
        email: '',
        name: '',
        title: '',
        text: '',
        md: '',
        files: List(),
        createDate: '',
        modifyDate: '',
    })
});

// reducer
export default handleActions({
    ...pender({
        type: GET_BLOG_ITEM,
        onSuccess: (state, action) => {
            console.log(`GET_BLOG_ITEM - onSuccess.action :: `, action);
            const { _id, email, name, title, text, md, files, createDate, modifyDate } = action.payload;
            return state.setIn(['view', '_id'], _id)
                        .setIn(['view', 'email'], email)
                        .setIn(['view', 'name'], name)
                        .setIn(['view', 'title'], title)
                        .setIn(['view', 'text'], text)
                        .setIn(['view', 'md'], md)
                        .setIn(['view', 'files'], fromJS(files))
                        .setIn(['view', 'createDate'], createDate)
                        .setIn(['view', 'modifyDate'], modifyDate)

        },
        onError: (state, action) => {
            console.log(`GET_BLOG_ITEM - onError.action :: `, action);
            return state;
        }
    }),
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
    }),
    ...pender({ /** POST_BLOG_FILE_UPLOAD */
        type: POST_FILE_UPLOAD,
        onSuccess: (state, action) => {
            console.log(action);
            return state;
        },
        onError: (state, action) => {  // 에러 발생 시
            console.log(action);
            return state;
        }
    }),
    ...pender({
        type: GET_FILE_LIST,
        onSuccess: (state, action) => {
            console.log(action);
            return state.set('list', fromJS(action.payload.list));
        },
        onError: (state, action) => {  // 에러 발생 시
            console.log(action);
            return state;
        }

    }),
}, initialState)







