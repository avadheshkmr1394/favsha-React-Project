import { GET_VALID_LOGIN_CREDENTIAL } from '../Actions/CommonAction'
import axios from 'axios'
import { getAxios } from '../Common/axiosActions'

class AuthService {

    GetToken = (UserName, Password) => {
        debugger
        let params = "username=" + UserName + "&password=" + Password + "&grant_type=password";
        let url = 'https://api.favsha.com/token';

        let res = axios({
            method: 'post',
            url: url,
            data: params,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(function (response) {
                if (response) {
                    debugger
                    localStorage.setItem('token', response.data.access_token);
                    localStorage.setItem('tokenType', response.data.token_type);
                    localStorage.setItem('userId', response.data.userId)
                    localStorage.setItem('expires_in', response.data.expires_in)
                    localStorage.setItem('issued', response.data.issued)
                    localStorage.setItem('userRole', response.data.userRole)
                    localStorage.setItem('issued', response.data.issued)
                    localStorage.setItem('expires', response.data.expires)
                    localStorage.setItem('email', response.data.email)
                }
            })
        return res;
    }

    LogOutUser = () => {
        localStorage.clear();
        sessionStorage.clear();
    }

}

export default new AuthService();