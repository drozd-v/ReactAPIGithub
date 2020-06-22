import axios from 'axios'
import { ListRepositoryType, ItemRepositoryType } from '../redux/reducers/allRepositoryReducer'
const instance = axios.create({
    baseURL: 'https://api.github.com/search/'
})

export const repositoryAPI = {
    getUser: (page: number, search: string): Promise<{items: Array<ListRepositoryType>, total_count: number}> => {
        if (search === '') return instance.get(`repositories?q=type:User&sort=stars&order=desc&page=${page}&per_page=10`).then((res) => res.data)
        return instance.get(`repositories?q=${search}+in:name&sort=stars&order=desc&page=${page}&per_page=10`)
        .then((res) => res.data)
    },
    
    repoUser: (search: string): Promise<{items: Array<ItemRepositoryType>}> => {
        return instance.get(`repositories?q=repo:${search}`)
        .then((res) => res.data)
    }
}


 