import actionType from '../constants/actionType'
import {repositoryAPI} from '../../api/api'

const initialState = {
    listRepository: [],
    search: '',
    page: 1,
    totalCount: 50,
    itemRepository: {
        name: '',
        stargazers_count: 0,
        updated_at: '',
        language: '',
        description: '',
        owner:{
            avatar_url: '',
            login: '',
        }
    }
}

const allRepositoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_USER:
            return {...state, listRepository: [...action.state]}
        case actionType.SET_ITEM:
            return {...state, itemRepository: action.item}
        case actionType.DRAW_CHANGE:
            return {...state, search: action.str}
        case actionType.TOTAL_COUNT:
            return {...state, totalCount: action.num}
        case actionType.CURRENT_PAGE:
            return {...state, page: action.currentNum}
        default:
            return state
    }
}

export const setUser = (state) => ({
    type: actionType.SET_USER,
    state
})
 export const setItem = (item) => ({
    type: actionType.SET_ITEM,
    item
 })

export const drawChange = (str) => ({
    type: actionType.DRAW_CHANGE,
    str
})

export const totalCountPage = (num) => ({
    type: actionType.TOTAL_COUNT,
    num
})

export const currentPageChange = (currentNum) => ({
    type: actionType.CURRENT_PAGE,
    currentNum
})

export const searchRepositoryThunk = (page, search) => (dispatch) =>{
    dispatch(currentPageChange(page))
    repositoryAPI.searchUser(page, search)
    .then((res) => {dispatch(setUser(res.items))
        dispatch(totalCountPage(res.total_count))
    })
}

export const setUserThunk = (page, search) => (dispatch) => {
    dispatch(currentPageChange(page))
    repositoryAPI.getUser(page, search)
    .then((res) => {dispatch(setUser(res.items))
        dispatch(totalCountPage(res.total_count))
})
}

export const showRepository = (id) => (dispatch) => {
    repositoryAPI.repoUser(id)
    .then((res) => {dispatch(setItem(res.items[0]))
    })
}

export default allRepositoryReducer