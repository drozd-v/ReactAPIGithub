import { connect, ConnectedProps } from 'react-redux'
import AllRepository from './AllRepository'
import {setUserThunk, ListRepositoryType} from '../../redux/reducers/allRepositoryReducer'
import { AppStateType } from '../../redux/store'

export type MapStateToPropsType = {
    list: Array<ListRepositoryType>,
    search: string,
    page: number,
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    list: state.listRepository.listRepository,
    search: state.listRepository.search,
    page: state.listRepository.page,
})

const AllRepositoryContainer = connect(mapStateToProps, {setUserThunk})

export type PropsType = ConnectedProps< typeof AllRepositoryContainer>

export default AllRepositoryContainer(AllRepository)