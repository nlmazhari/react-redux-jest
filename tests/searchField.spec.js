import C from '../constants'
import searchFieldReducer from '../reducers/searchField'

describe('searchFieldReducer reducer', () => {

    it('should handle CLEAR_SEARCH_FIELD', () => {
        expect(
            searchFieldReducer([
                "morning"
            ], {
                    type: C.CLEAR_SEARCH_FIELD
                })
        ).toEqual(
            []
        )
    })

    it('should handle SET_SEARCH_FIELD', () => {
        expect(
            searchFieldReducer([
            ], {
                    type: C.SET_SEARCH_FIELD,
                    payload: ["morning"]
                })
        ).toEqual([
            "morning"
        ])
    })

})