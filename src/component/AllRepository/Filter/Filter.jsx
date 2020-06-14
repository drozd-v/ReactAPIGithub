import React from 'react'
import style from './Filter.module.css'
import { useHistory } from 'react-router-dom';

const Filter = (props) => {
    const drawChange = (e) => {
        props.drawChange(e.target.value)
    };

    const history = useHistory()

    const searchRepository = () =>{ props.searchRepositoryThunk(1, props.search); history.replace('/list?page=1')}

    return <div className={style.form}>
            <input type="text" onChange={drawChange} value={props.search} className={style.text}/>
            <input type="button" value="Поиск" onClick={searchRepository}/>
    </div>
}

export default Filter