import axios from 'lib/axios';
import axiosForm from 'lib/axios';

axiosForm.defaults.headers.post['Content-Type'] = `multipart/form-data`;

export const getFileList = () => axios.get('/api/file/list')
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => {
        console.log(`eeeeeeeeeeee`);
        return {
            list: [],
            message: e
        }
    })

export const postFileUpload = (data) => axiosForm.post('/api/file/upload', data, config)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => {
        console.log(`eeeeeeeeeeee`);
        return console.error(e)
    })


const config = {
    onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    },
}