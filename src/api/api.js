import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com/search/'
})

export const repositoryAPI = {
    getUser: (page, search) => {
        if (search === '') return instance.get(`repositories?q=type:User&sort=stars&order=desc&page=${page}&per_page=10`).then((res) => res.data)
        return instance.get(`repositories?q=${search}&sort=stars&order=desc&page=${page}&per_page=10`)
        .then((res) => res.data)
    },
    
    repoUser: (search) => {
        return instance.get(`repositories?q=repo:${search}`)
        .then((res) => res.data)
    },
    
    searchUser: (page, search) => {
        return instance.get(`repositories?q=${search}+in:name&sort=stars&order=desc&page=${page}&per_page=10`)
        .then((res) => res.data)
    }
}


 