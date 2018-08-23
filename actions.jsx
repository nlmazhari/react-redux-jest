import C from './constants'
import fetch from 'isomorphic-fetch'

export const changeGifs = Gifs =>
    ({
        type: C.CHANGE_GIFS,
        payload: Gifs
    })

export const fetchGifs = value => dispatch => {

    dispatch({
        type: C.FETCH_GIFS
    })

    let url = 'https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=25&offset=0&rating=Y&lang=en&q='
    
    fetch(url + value)
        .then(response => response.json())
        .then(Gifs => {
            dispatch(changeGifs(Gifs.data))
        })
        .catch(error => {
            alert(error.message)
        })
}

export const clearGifs = () =>
    ({
        type: C.CLEAR_GIFS
    })

export const clearSearchField = () => 
    ({
        type: C.CLEAR_SEARCH_FIELD
    })

export const setSearchField = keyword =>
    ({
        type: C.SET_SEARCH_FIELD,
        payload: keyword
    })