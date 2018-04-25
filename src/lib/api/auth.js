import axios from 'lib/axios';

export const getAuthCheck = () => axios.get('/api/auth/check')
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => console.error(e))

export const postLogin = (data) => {
    if(!data.email) return { error: `이메일이 입력되지 않았습니다.` };
    if(!data.password) return { error: `비밀번호가 입력되지 않았습니다.` };

    return axios.post('/api/auth/login', data)
        .then((res) => {
            console.log(res.status);
            console.log(res.data);
            return {
                response: res.data,
                error: null
            }
            // if (res.status > 100) { // 0 ~ 99
            // } else if (res.status > 200) { // 100 ~ 199
            // } else if (res.status > 300) { // 200 ~ 299
            // if (res.status > 400) { // 000 ~ 399
            // } else if (res.status > 400) { // 400 ~ 
            //     return {
            //         response: res.data,
            //         error: res.status
            //     }
            // }
        })
        .catch(e => {
            console.error(e);
            return {
                error: e.response.data
            }
        })
}

export const postAuthJoin = (data) => {
    if(!data.name) return { error: `이름 입력되지 않았습니다.` };
    if(!data.email) return { error: `이메일이 입력되지 않았습니다.` };
    if(!data.password) return { error: `비밀번호가 입력되지 않았습니다.` };

    return axios.post('/api/auth/join', data)
        .then((res) => {
            console.log(res.data.user);
            const {email, name} = res.data.user;
            return {
                user: {
                    email: email,
                    name: name
                },
                error: null
            }
        })
        .catch(e => {
            console.error(e);
            return {
                user: {
                    email: null,
                    name: 'guest'
                },
                error: e.response.data
            }
        })
}
export const postAuthModify = async (data) => {
    if(!data.name) return { error: `이름 입력되지 않았습니다.` };
    if(!data.email) return { error: `이메일이 입력되지 않았습니다.` };
    if(!data.password) return { error: `비밀번호가 입력되지 않았습니다.` };

    return axios.put('/api/auth/modify', data)
        .then((res) => {
            console.log(res.data.user);
            const {email, name} = res.data.user;
            return {
                user: {
                    email: email,
                    name: name
                },
                error: null
            }
        })
        .catch(e => {
            console.error(e);
            return {
                user: {
                    email: null,
                    name: 'guest'
                },
                error: e.response.data
            }
        })
}

export const postAuthLogin = async (data) => {
    if(!data.email) return { error: `이메일이 입력되지 않았습니다.` };
    if(!data.password) return { error: `비밀번호가 입력되지 않았습니다.` };

    return axios.post('/api/auth/login', data)
        .then((res) => {
            console.log(res);  
            console.log(res.status);    
            console.log(res.data.user);
            const {email, name} = res.data.user;
            return {
                user: {
                    email: email,
                    name: name
                },
                error: null
            }
        })
        .catch(e => {
            console.error(e.status);
            console.error(e);
            return {
                user: {
                    email: null,
                    name: 'guest'
                },
                error: e.response.data
            }
        })
}

export const postAuthLogout = () => {
    return axios.post('/api/auth/logout')
        .then(res => {
            console.log(res);
            return {
                res
            }
        })
        .catch(e => {
            return {
                res: e
            }
        })
}

export const postLogout = () => {
    return axios.post('/api/auth/logout')
        .then(res => {
            console.log(res);
            return {
                res
            }
        })
        .catch(e => {
            return {
                res: e
            }
        })
}




const asyncAlert = async (message) => {
    alert(message);
    return { error: message };
}