import React, {useEffect} from 'react'
import style from './AllRepository.module.css'
import FilterComponent from './Filter/FilterComponent'
import ListRepositoryContainer from './ListRepository/ListRepositoryContainer'
import { useLocation } from 'react-router-dom'
import { PropsType } from './AllRepositoryComponent'


const AllRepository = (props: PropsType) => {
    const location = useLocation()

    useEffect(() => {
        const page = parseInt(location.search.split('=')[1])
        if(!props.list.length ){
            if (page !== props.page) props.setUserThunk(page, props.search)
            else props.setUserThunk(props.page, props.search)
        } else props.setUserThunk(page, props.search)
    }, [location]) 

    return <div className={style.allRepository}>
        <FilterComponent />
        <ListRepositoryContainer />
    </div>
}

export default AllRepository