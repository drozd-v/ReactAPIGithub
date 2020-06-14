import React from 'react'
import style from './Home.module.css'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return <div className={style.head}>
        <span>Главная страница</span>
        <NavLink to='/list?page=1'>
            <span className={style.link}>Список репозиториев</span>
        </NavLink>
    </div>
}

export default Home