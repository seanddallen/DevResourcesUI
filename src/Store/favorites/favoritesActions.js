import axios from "axios";
import { FETCH_ALL_FAVORITES, ADD_ONE_FAVORITE, REMOVE_ONE_FAVORITE } from "../actionTypes";

export const fetchAllFavorites = () => async dispatch => {
    let res = await axios.get("http://localhost:8000/favorites");
    dispatch({
        type: FETCH_ALL_FAVORITES,
        payload: res.data
    });
};

export const addOneFavorite = newFavorite => async dispatch => {
    let res = await axios.post("http://localhost:8000/favorites", newFavorite);
    dispatch({
        type: ADD_ONE_FAVORITE,
        payload: res.data
    });
};

export const removeOneFavorite = id => async dispatch => {
    let res = await axios.delete(`http://localhost:8000/favorites/${id}`);
    dispatch({
        type: REMOVE_ONE_FAVORITE,
        payload: res.data
    }); 
};