import { GET_VALID_LOGIN_CREDENTIAL } from '../Actions/CommonAction';
import update from 'immutability-helper'


const LoginReducers = (state = [], action) => {
    debugger
    switch (action.type) {
        case GET_VALID_LOGIN_CREDENTIAL: {

            if (action.paload) {
                update(state, {
                    loginUser: {
                        $set: (
                            action.paload.data ? action.paload.data : []
                        )
                    }
                })
            }
            else {
                update(state, {
                    isloading: {
                        $set: false
                    }
                })
            }
        }
        default:
            return state;
    }
}


export default LoginReducers