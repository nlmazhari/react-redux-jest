import C from '../constants'

const initialState = []

const searchFieldReducer = (state = initialState, action) => {
	switch (action.type) {
		case C.SET_SEARCH_FIELD:
			return action.payload
		case C.CLEAR_SEARCH_FIELD:
			return []
		default:
			return state
	}
}

export default searchFieldReducer