import axios from "axios";
import {GET_ERROR} from "./types";

export const slack = (email) => dispatch => {
    axios.post('http://localhost:8000/v1/slack/', email)
        .then(res => {

        })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err.response
            });
        });
};