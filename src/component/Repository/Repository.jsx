import React from 'react'
import style from './Repository.module.css'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'



const Repository = (props) => {
    return <div>
        <div className={style.repository}>
            <span>Name repository:{props.itemRepository.name}</span>
            <span>Star:{props.itemRepository.stargazers_count}</span>
            <span>Data:{format(new Date(props.itemRepository.updated_at), 'yyyy MM dd', { locale: ru })}</span>
        </div>
        <div className={style.description}>
            <img src={props.itemRepository.owner.avatar_url}/>
            <span>Nickname:{props.itemRepository.owner.login}</span>
            <span>Language:{props.itemRepository.language}</span>
            <span>Description:{props.itemRepository.description}</span>
        </div>
    </div>
}

export default Repository