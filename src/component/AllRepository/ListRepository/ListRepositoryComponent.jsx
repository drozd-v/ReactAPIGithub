import { connect } from 'react-redux'
import ListRepository from './ListRepository'
 
let mapStateToProps = (state) => ({
    list: state.listRepository.listRepository,
    search: state.listRepository.search,
    page: state.listRepository.page,
    totalCount: state.listRepository.totalCount
})
 
const ListRepositoryComponent = connect(mapStateToProps, null)(ListRepository)

export default ListRepositoryComponent