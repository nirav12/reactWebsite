import React from 'react';
import fetch from 'isomorphic-fetch';

export function userHasErrored(bool){
    return {
        type: 'USER_HAS_ERRORED',
        hasErrored: bool
    };
}

export function userIsLoading(bool){
    return {
        type: 'USER_IS_LOADING',
        isLoading:bool
    };
}

export function userFetchDataSuccess(rowData){
    return {
        type:'USER_FETCH_DATA_SUCCESS',
        rowData
    };
}

export function fetchData(url){
    return (dispatch) => {
        dispatch(userIsLoading(true));

        return fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(userIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(userFetchDataSuccess(items)))
            .catch(() => dispatch(userHasErrored(true)));

    };
}