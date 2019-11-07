import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_SUCCESS, payload: response.data.results })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: `${err.response.status} ${err.response.data}`})
        });
};