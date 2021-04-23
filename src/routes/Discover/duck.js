import axios from 'axios';

const GET_ALL_NEW_RELEASES_REQUEST = 'GET_ALL_NEW_RELEASES_REQUEST';
const GET_ALL_NEW_RELEASES_SUCCESS = 'GET_ALL_NEW_RELEASES_SUCCESS';
const GET_ALL_FEATURED_PLAYLIST_SUCCESS = 'GET_ALL_FEATURED_PLAYLIST_SUCCESS';
const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS'; 
const SET_ACCESS_TOKEN =  'SET_ACCESS_TOKEN';
const GET_SELECTED_TRACK = 'GET_SELECTED_TRACK';



export default  (state = {
    newReleases: [],
    playlists: [],
    categories: [],
    currentAccessToken: '',
    selectedTrack: [],
    getAllNewReleasePendingRequest: false
}, action) => {
    switch (action.type) {

    case GET_ALL_NEW_RELEASES_REQUEST:
        return state = {
            ...state,
            getAllNewReleasePendingRequest: true
        }

    case GET_ALL_NEW_RELEASES_SUCCESS:
        return state = {
            ...state,
            getAllNewReleasePendingRequest: false,
            newReleases: action.payload.items.map(item => item)
        }

    case GET_ALL_FEATURED_PLAYLIST_SUCCESS:
        return state = {
            ...state,
            getAllNewReleasePendingRequest: false,
            playlists: action.payload.items.map(item => item)
        }
    
    case GET_ALL_CATEGORIES_SUCCESS:
        return state = {
            ...state,
            getAllNewReleasePendingRequest: false,
            categories: action.payload.items.map(item => item)
        }

    case SET_ACCESS_TOKEN:
        return state = {
            ...state,
            getAllNewReleasePendingRequest: false,
            currentAccessToken: action.payload
        }

    case GET_SELECTED_TRACK:
        return state = {
            ...state,
            getAllNewReleasePendingRequest: false,
            selectedTrack: action.payload
        }
    default: return state;

    }
};

export const getNewReleases = (accessToken, dispatch) => {
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/new-releases',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        dispatch({
            type: GET_ALL_NEW_RELEASES_SUCCESS,
            payload: response.data.albums
          })
    })
}

export const getAllFeaturedPlaylists = (accessToken, dispatch) => {
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/featured-playlists',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        dispatch({
            type: GET_ALL_FEATURED_PLAYLIST_SUCCESS,
            payload: response.data.playlists
          })
    })
}

export const getAllCategories = (accessToken, dispatch) => {
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/categories',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        dispatch({
            type: GET_ALL_CATEGORIES_SUCCESS,
            payload: response.data.categories
          })
    })
}

export const getSelectedTrack = (selectedTrack, dispatch) => {

    dispatch({
        type: GET_SELECTED_TRACK,
        payload: selectedTrack
      })
}


export const setAccessToken = (accessToken, dispatch) => {
    dispatch({
        type: SET_ACCESS_TOKEN,
        payload: accessToken
      })
}