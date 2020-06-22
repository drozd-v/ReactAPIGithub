import { connect, ConnectedProps } from 'react-redux'
import Filter from './Filter'
import {searchRepositoryThunk} from '../../../redux/reducers/allRepositoryReducer'
import { AppStateType } from '../../../redux/store'
// import { Dispatch } from 'redux'

export type MapStateToPropsType = {
    search: string,
    page: number
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    search: state.listRepository.search,
    page: state.listRepository.page
})

// export type MapDispatchPropsType = {
//     searchData: (search: string) => void
// }

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => ({
//     searchData: (search) => dispatch(actions.searchData(search))
// })

const FilterContainer = connect(mapStateToProps, {searchRepositoryThunk})

export type PropsType = ConnectedProps<typeof FilterContainer>

export default FilterContainer(Filter)