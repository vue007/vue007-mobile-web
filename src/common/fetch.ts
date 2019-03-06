import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from '@/common/utils/auth';
import { CodeEnum } from '@/types/enum/code.enum';

const config: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_BASE_URL, // api的base_url,
    timeout: 5000,
    withCredentials: false, // 关闭cookies
    responseType: 'json',
};

const service: AxiosInstance = axios.create(config);

service.defaults.headers.common['Authorization'] = 'x-admin-token'

// request Interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if ( getToken() ) {
            config.headers['x-admin-token'] = getToken() // 让每个请求携带token--['x-token']
        }

        return Promise.resolve(config);
    },
    (error: any) => {

        return Promise.resolve(config);
    }
);

// response Interceptors
service.interceptors.response.use(
    (response: AxiosResponse) => {

        if (response.data.code === CodeEnum.SUCCESS) {
            return Promise.resolve(response.data);
        } else {
            // Message({message: data.msg, type: 'error', duration: 2 * 1314});
            return Promise.reject('error');
        }

    },
    (error: any) => {

        return Promise.reject(error);
    }
);

export default service;
