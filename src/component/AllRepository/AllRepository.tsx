import React, {useEffect} from 'react'
import style from './AllRepository.module.css'
import FilterContainer from './Filter/FilterContainer'
import ListRepositoryContainer from './ListRepository/ListRepositoryContainer'
import { useLocation } from 'react-router-dom'
import { PropsType } from './AllRepositoryContainer'


const AllRepository:React.FC<PropsType>= (props) => {
    const location = useLocation()

    useEffect(() => {
        const page = parseInt(location.search.split('=')[1])
        if(!props.list.length){
            if (page !== props.page) props.setUserThunk(page, props.search)
            else props.setUserThunk(props.page, props.search)
        } 
    }, [location]) 

    // useEffect(() => {
    //     props.setUserThunk(1, props.search)
    // }, [props.search]) 

    return <div className={style.allRepository}>
        <FilterContainer />
        <ListRepositoryContainer />
    </div>
}

export default AllRepository