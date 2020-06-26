import axios from "axios";
import { GET_ONE_REC_TAGS_PENDING, GET_ONE_REC_TAGS_FAILED, ADD_TAGS_PENDING, UPDATE_TAGS_FAILED, DELETE_TAGS_SUCCESS, DELETE_TAGS_FAILED } from './tagsConstants';

export const getAllTags = () => {
    return dispatch => {
        dispatch({
            type: GET_TAGS_PENDING
        });
        axios
            .get('http://localhost:8000/tags')
            .then(res => {
                dispatch({
                    type: GET_TAGS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_TAGS_FAILED,
                    payload: err
                })
            })
    }
}

export const getOneRecTags = id => {
    return dispatch => {
        dispatch({
            type: GET_ONE_REC_TAGS_PENDING
        })
        axios
            .get(`http://localhost:8000/tags/${id}`)
            .then(res => {
                dispatch({
                    type: GET_ONE_REC_TAGS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_ONE_REC_TAGS_FAILED,
                    payload: err
                })
            })
    }
}

export const addTag = newTag => {
    return dispatch => {
        dispatch({
            type: ADD_TAGS_PENDING
        })
        axios.post('http://localhost:8000/tags', newTag)
        .then(res => {
            dispatch({
                type: ADD_TAGS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_TAGS_FAILED,
                payload: err
            })
        })
    }
}

export const updateTag = (updatedInfo, id) => {
    return dispatch => {
        dispatch({
            type: UPDATE_TAGS_PENDING
        })
        axios.patch(`http://localhost:8000/tags/${id}`, updatedInfo)
        .then(res => {
            dispatch({
                type: UPDATE_TAGS_SUCCESS,
                payload: res.data[0]
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_TAGS_FAILED,
                payload: err
            })
        })
    }
}

export const removeTag = id => {
    return dispatch => {
        dispatch({
            type: DELETE_TAGS_PENDING
        })
        axios.delete(`http://localhost:8000/tags/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_TAGS_SUCCESS,
                payload: res.data[0]
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_TAGS_FAILED,
                payload: err
            })
        })
    }
}

