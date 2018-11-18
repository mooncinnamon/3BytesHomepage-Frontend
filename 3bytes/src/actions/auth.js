import axios from 'axios';
import {GET_ERROR, SET_CURRENT_USER} from './types';
import setAuthToken from '../libs/setAuthToken';
import jwt_decode from 'jwt-decode';

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
            console.log(GET_ERROR);
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
