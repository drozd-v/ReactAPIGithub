import { connect } from 'react-redux'
import Filter from './Filter'
import {searchRepositoryThunk, drawChange} from '../../../redux/reducers/allRepositoryReducer'

let mapStateToProps = (state) => ({
    search: state.listRepository.search,
    page: state.listRepository.page
})
 
const FilterComponent = connect(mapStateToProps, {searchRepositoryThunk, drawChange})(Filter)

export default FilterComponent