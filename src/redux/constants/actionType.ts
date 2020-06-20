import { ListRepositoryType, ItemRepositoryType } from './../reducers/allRepositoryReducer';
export enum ActionType {
    SEARCH_REPOSITORY = 'SEARCH_REPOSITORY',
    SET_USER = 'SET_USER',
    DRAW_CHANGE = 'DRAW_CHANGE',
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

export type DrawChangeType ={
    type: ActionType.DRAW_CHANGE,
    str: string
}

export type TotalCountPageType = {
    type: ActionType.TOTAL_COUNT,
    num: number
}

export type CurrentPageChangeType = {
    type: ActionType.CURRENT_PAGE,
    currentNum: number
}

type ActionsTypes = SetUserType | SetItemType | DrawChangeType | TotalCountPageType | CurrentPageChangeType

export default ActionsTypes