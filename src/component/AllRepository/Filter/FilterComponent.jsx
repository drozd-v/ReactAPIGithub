import { connect } from 'react-redux'
import Filter from './Filter'
import {searchRepositoryThunk, actions} from '../../../redux/reducers/allRepositoryReducer'

let mapStateToProps = (state) => ({
    search: state.listRepository.search,
    page: state.listRepository.page
})
 
const FilterComponent = connect(mapStateToProps, {searchRepositoryThunk, actions})(Filter)

export default FilterComponent