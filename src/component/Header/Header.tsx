import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return <div className={style.header}><a href='/'>
        <span>Github</span>
    </a>
    </div>
}

export default Header