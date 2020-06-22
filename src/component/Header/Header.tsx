import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <div className={style.header}><NavLink to='/'>
        <span>Github</span>
    </NavLink>
    </div>
}

export default Header