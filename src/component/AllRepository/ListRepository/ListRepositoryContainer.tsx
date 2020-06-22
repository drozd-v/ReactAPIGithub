import { connect, ConnectedProps } from 'react-redux'
import ListRepository from './ListRepository'
import {setUserThunk} from '../../../redux/reducers/allRepositoryReducer' 
import { AppStateType } from '../../../redux/store'

export type ListRepositoryItemType = {
    name: string,
    stargazers_count: number,
    updated_at: string,
    html_url: string,
    full_name: string,
    id: number
}

export type MapStateToPropsType = {
    list: Array<ListRepositoryItemType>,
    search: string,
    page: number,
    totalCount: number
}
 
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    list: state.listRepository.listRepository,
    search: state.listRepository.search,
    page: state.listRepository.page,
    totalCount: state.listRepository.totalCount,
})
 
const ListRepositoryContainer = connect(mapStateToProps, {setUserThunk})

export type PropsType = ConnectedProps< typeof ListRepositoryContainer>

export default ListRepositoryContainer(ListRepository)