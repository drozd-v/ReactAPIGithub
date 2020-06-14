import { connect } from 'react-redux'
import AllRepository from './AllRepository'
import {setUserThunk} from '../../redux/reducers/allRepositoryReducer'
 
let mapStateToProps = (state) => ({
    list: state.listRepository.listRepository,
    search: state.listRepository.search,
    page: state.listRepository.page,
    totalCount: state.listRepository.totalCount
})
 
const AllRepositoryComponent = connect(mapStateToProps, {setUserThunk})(AllRepository)

export default AllRepositoryComponent