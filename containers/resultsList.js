import {connect} from 'react-redux'
import Component from 'components/resultsList'

const mapStateToProps = state => ({
    gifs: state.resultsList
})

const ResultsListContainer = connect(mapStateToProps)(Component)
export default ResultsListContainer