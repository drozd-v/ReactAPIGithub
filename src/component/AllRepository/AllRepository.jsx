import React, {useEffect} from 'react'
import style from './AllRepository.module.css'
import FilterComponent from './Filter/FilterComponent'
import ListRepositoryComponent from './ListRepository/ListRepositoryComponent'
import { useLocation } from 'react-router-dom'

const AllRepository = (props) => {
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
        <ListRepositoryComponent setUserThunk={props.setUserThunk}/>
    </div>
}

export default AllRepository