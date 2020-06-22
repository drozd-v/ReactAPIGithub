import ActionsTypes, {SetUserType, SetItemType, Search, TotalCountPageType, CurrentPageChangeType, ActionType} from '../constants/actionType'
import {repositoryAPI} from '../../api/api'
import { Dispatch } from 'redux'

export type ListRepositoryType = {
    name: string,
    stargazers_count: number,
    updated_at: string,
    html_url: string,
    full_name: string,
    id: number
}

export type ItemRepositoryType = {
    name: string,
    stargazers_count: number,
    updated_at: string,
    language: string,
    description: string,
    owner: OwnerType
}

export type OwnerType = {
    avatar_url: string,
    login: string,
}

export type InitialStateType = {
    listRepository: Array<ListRepositoryType>,
    search: string,
    page: number,
    totalCount: number,
    itemRepository: ItemRepositoryType
}

const initialState: InitialStateType = {
    listRepository: [],
    search: '',
    page: 1,
    totalCount: 50,
    itemRepository: {
        name: '',
        stargazers_count: 0,
        updated_at: '2020 01 01',
        language: '',
        description: '',
        owner: {
            avatar_url: '',
            login: '',
        }
    }
}

const allRepositoryReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case ActionType.SET_USER:
            return {...state, listRepository: action.state}
        case ActionType.SET_ITEM:
            return {...state, itemRepository: action.item}
        case ActionType.SEARCH:
            return {...state, search: action.search}
        case ActionType.TOTAL_COUNT:
            return {...state, totalCount: action.num}
        case ActionType.CURRENT_PAGE:
            return {...state, page: action.currentNum}
        default:
            return state
    }
}

export const actions = {
    setUser: (state: Array<ListRepositoryType>): SetUserType => ({
        type: ActionType.SET_USER,
        state
    }),

    searchData: (search: string): Search => ({
        type: ActionType.SEARCH,
        search
    }),

    setItem: (item: ItemRepositoryType): SetItemType => ({
        type: ActionType.SET_ITEM,
        item
    }),

    totalCountPage: (num: number): TotalCountPageType => ({
        type: ActionType.TOTAL_COUNT,
        num
    }),

    currentPageChange: (currentNum: number): CurrentPageChangeType => ({
        type: ActionType.CURRENT_PAGE,
        currentNum
    }),
}

export const searchRepositoryThunk = (page: number, search: string) => (dispatch: Dispatch<ActionsTypes>) =>{
    dispatch(actions.currentPageChange(page))
    dispatch(actions.searchData(search))
    repositoryAPI.getUser(page, search)
    .then((res) => {dispatch(actions.setUser(res.items))
        dispatch(actions.totalCountPage(res.total_count))
    })
}

export const setUserThunk = (page: number, search: string) => (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(actions.currentPageChange(page))
    repositoryAPI.getUser(page, search)
    .then((res) => {dispatch(actions.setUser(res.items))
        dispatch(actions.totalCountPage(res.total_count))
})
}

export const showRepository = (id: string) => (dispatch: Dispatch<ActionsTypes>) => {
    repositoryAPI.repoUser(id)
    .then((res) => {dispatch(actions.setItem(res.items[0]))
    })
}

export default allRepositoryReducer