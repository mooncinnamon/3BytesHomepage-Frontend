import axios from 'axios';
import {alertActions} from "./auth.actions";
import {GET_ERROR, SET_CURRENT_USER} from './types';
import setAuthToken from '../libs/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('http://127.0.0.1:8000/v1/sign-up/users/', user)
        .then(res => history.push('/login'))
        .catch(err => {
            console.log('err! sign up',GET_ERROR,err.response);
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            });
        });
};


export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:8000/v1/api-token-auth/', user)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            console.log('err! login',GET_ERROR, err.response);
            dispatch({
                type: GET_ERROR,
                payload: err.response
            });
        });
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};
