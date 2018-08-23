import C from '../constants'

const initialState = []

const resultsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case C.CHANGE_GIFS:
			return action.payload
		case C.CLEAR_GIFS:
			return []
		default:
			return state
	}
}


export default resultsListReducer