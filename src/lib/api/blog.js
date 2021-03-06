import axios from 'lib/axios';
import axiosForm from 'lib/axios';

axiosForm.defaults.headers.post['Content-Type'] = `multipart/form-data`;

export const getBlogItem = (id) => axios.get(`/api/blog/${id}`)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => {
        console.log(`error : `, e);
        return e
    })

export const getBlogListAll = () => axios.get(`/api/blog/list`)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => {
        console.log(`error : `, e);
        return e
    })

export const postBlogWrite = (data) => axios.post(`/api/blog/write`, data)
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        console.log(`error : `, e);
        return e
    })

const config = {
    onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    },
}