import axios from 'lib/axios';

export const getBlogListAll = () => axios.get('/api/blog/list')
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => {
        console.log(`eeeeeeeeeeee`);
        return console.error(e)
    })

export const postBlogWrite = (data) => axios.post('/api/blog/write', data, config)
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        console.log(`eeeeeeeeeeee`);
        return console.error(e)
    })

const config = {
    onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    }
}