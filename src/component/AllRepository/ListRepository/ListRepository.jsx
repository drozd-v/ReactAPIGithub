import React from 'react'
import style from './ListRepository.module.css'
import {NavLink} from 'react-router-dom'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const ListRepository = (props) => {
    let countPage = Math.ceil( props.totalCount / 10);
    let page = [];
    if (countPage > 5){
        for (let i = 1; i <= 5; i++) page.push(i)
    } else { 
        for (let i = 1; i <= countPage; i++) page.push(i)
    }

    return <div>
        <div className={style.pagination}>
            {page.map(p => 
                    {return <NavLink to={`/list?page=${p}`} className={ props.page === p ? style.activePage : style.page} key={p} onClick={() => { props.setUserThunk(p, props.search)}}>{p}</NavLink>})
            }  
        </div>
        <div className={style.listRepository}>
            {props.list.map(item => {return <NavLink to={'repository/' + item['full_name']} key={item.id}><div className={style.item}>
                <span>Name:{item.name}</span>
                <span>Star:{item.stargazers_count}</span>
                <span>Data:{format(new Date(item.updated_at), 'yyyy MM dd', { locale: ru })}</span>
                <span>Url:{item.html_url}</span>
            </div></NavLink>})}
        </div>
    </div>
}

export default ListRepository