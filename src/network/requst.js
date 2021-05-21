import axios from 'axios'

export function requst(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
    });
    //requst拦截器
    instance.interceptors.request.use(config => {
        // console.log('数据开始请求');
        return config;
    }, err => {
        console.log(err);
    });
    //response拦截器
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    });
    return instance(config);
}