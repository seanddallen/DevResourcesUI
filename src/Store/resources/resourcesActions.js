import axios from "axios";
import { GET_RESOURCES_PENDING, GET_RESOURCES_SUCCESS, GET_RESOURCES_FAILED, GET_ONE_RESOURCES_PENDING, GET_ONE_RESOURCES_SUCCESS, GET_ONE_RESOURCES_FAILED, ADD_RESOURCES_PENDING, ADD_RESOURCES_SUCCESS, ADD_RESOURCES_FAILED, UPDATE_RESOURCES_PENDING, UPDATE_RESOURCES_SUCCESS, UPDATE_RESOURCES_FAILED, DELETE_RESOURCES_PENDING, DELETE_RESOURCES_SUCCESS, DELETE_RESOURCES_FAILED, UPDATE_RESOURCEVOTE_SUCCESS} from "./resourcesConstants";

export const getAllResources = () => {
    return dispatch => {
        dispatch({
            type: GET_RESOURCES_PENDING
        });
        axios
            .get("http://localhost:8000/resources")
            .then(res => {
                dispatch({
                    type: GET_RESOURCES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_RESOURCES_FAILED,
                    payload: err
                })
            })
    }
}

export const getOneResource = id => {
    return dispatch => {
        dispatch({
            type: GET_ONE_RESOURCES_PENDING
        })
        axios
            .get(`http://localhost:8000/resources/${id}`)
            .then(res => {
                dispatch({
                    type: GET_ONE_RESOURCES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_ONE_RESOURCES_FAILED,
                    payload: err
                })
            })
    }
}

export const addResource = newResource => {
    return dispatch => {
        dispatch({
            type: ADD_RESOURCES_PENDING
        })
        axios
            .post('http://localhost:8000/resources', newResource)
            .then(res => {
                dispatch({
                    type: ADD_RESOURCES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_RESOURCES_FAILED,
                    payload: err
                })
            })
    }
}

export const updateResource = (updatedInfo, id) => {
    return dispatch => {
        dispatch({
            type: UPDATE_RESOURCES_PENDING
        })
        axios.patch(`http://localhost:8000/resources/${id}`, updatedInfo)
        .then(res => {
            dispatch({
                type: UPDATE_RESOURCES_SUCCESS,
                payload: res.data[0]
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_RESOURCES_FAILED,
                payload: err
            })
        })
    }
}

export const updateResourceVote = (upvote, downvote, id) => {
    return dispatch => {
        
        axios.patch(`http://localhost:8000/resources/${id}`, {
            upvote: upvote,
            downvote: downvote
        })
        .then(res => {
            dispatch({
                type: UPDATE_RESOURCEVOTE_SUCCESS,
                payload: res.data[0]
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_RESOURCES_FAILED,
                payload: err
            })
        })
    }
}

export const removeResource = id => {
    return dispatch => {
        dispatch({
            type: DELETE_RESOURCES_PENDING
        })
        axios.delete(`http://localhost:8000/resources/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_RESOURCES_SUCCESS,
                payload: res.data[0]
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_RESOURCES_FAILED,
                payload: err
            })
        })
    }
}