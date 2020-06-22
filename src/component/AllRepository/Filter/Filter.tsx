import React, { useState } from 'react'
import style from './Filter.module.css'
import { useHistory } from 'react-router-dom';
import { PropsType } from './FilterContainer';

const Filter:React.FC<PropsType> = (props) => {
    const[search, setSearch] = useState(props.search)
    const drawChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    };

    const history = useHistory()

    const searchRepository = () =>{ props.searchRepositoryThunk(1, search); history.replace('/list?page=1')}

    return <div className={style.form}>
            <input type="text" onChange={drawChange} value={search} className={style.text}/>
            <input type="button" value="Поиск" onClick={searchRepository}/>
    </div>
}

export default Filter