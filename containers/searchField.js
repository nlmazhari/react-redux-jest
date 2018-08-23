import {connect} from 'react-redux'
import Component from 'components/searchField'

import { fetchGifs, setSearchField, clearGifs, clearSearchField } from '../actions'

const mapStateToProps = state => state.searchField
const mapDispatchToProps = dispatch =>
    ({
        onClick(value) {
            if (value) {
                dispatch(
                    fetchGifs(value)
                )
                dispatch(
                    setSearchField(value)
                )
            }
            else {
                dispatch(
                    clearGifs()
                )
                dispatch(
                    clearSearchField()
                )
            }
        }
    })

const SearchFieldContainer = connect(mapStateToProps, mapDispatchToProps)(Component)
export default SearchFieldContainer