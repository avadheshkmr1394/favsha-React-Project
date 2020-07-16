import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import AppConfig from '../AppConfig'



export const getAxios = (url, axiosRequestConfig) => {
    let token = localStorage.getItem('token');

    axiosRequestConfig.headers = {
        userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : AppConfig.env('userId'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `${localStorage.getItem('tokenType')} ${localStorage.getItem('token')}`,
        BrowserSessionId: getCookie('BrowserSessionId'),
    };
    url = AppConfig.env('url') + url;
    var resp = axios({
        method: 'get',
        url: url,
        headers: axiosRequestConfig.headers
    })
        .then(function (response) {
            return response;
        })
        .catch(function (response) {
            console.log(response);
        });
    return resp;
};

export const postAxios = (url, axiosRequestConfig) => {
    let loginUser = localStorage.getItem('user');
    axiosRequestConfig.headers = {
        userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : AppConfig.env('userId'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `${localStorage.getItem('tokenType')} ${localStorage.getItem('token')}`,
        BrowserSessionId: getCookie('BrowserSessionId'),
    };
    url = AppConfig.env('url') + url;

    var resp = axios({
        method: 'post',
        url: url,
        data: axiosRequestConfig.params,
        headers: axiosRequestConfig.headers,
    })
        .then(function (response) {
            return response;
        })
        .catch(function (response) {
            console.log(response);
        });
    return resp;
};

export const getCookie = (c_name) => {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
};





