import { ListRepositoryType, ItemRepositoryType } from './../reducers/allRepositoryReducer';
export enum ActionType {
    SEARCH_REPOSITORY = 'SEARCH_REPOSITORY',
    SET_USER = 'SET_USER',
    SEARCH = 'SEARCH',
    TOTAL_COUNT = 'TOTAL_COUNT',
    CURRENT_PAGE = 'CURRENT_PAGE',
    SET_ITEM = 'SET_ITEM'
}

export type  SetUserType = {
    type: ActionType.SET_USER,
    state: Array<ListRepositoryType>,
}

export type SetItemType = {
    type: ActionType.SET_ITEM,
    item: ItemRepositoryType
}

export type Search = {
    type: ActionType.SEARCH,
    search: string
}

export type TotalCountPageType = {
    type: ActionType.TOTAL_COUNT,
    num: number
}

export type CurrentPageChangeType = {
    type: ActionType.CURRENT_PAGE,
    currentNum: number
}

type ActionsTypes = SetUserType | SetItemType | Search | TotalCountPageType | CurrentPageChangeType

export default ActionsTypes