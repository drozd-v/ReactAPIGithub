import React from 'react'
import style from './Repository.module.css'

const Repository = (props) => {
    return <div>
        <div className={style.repository}>
            <span>Name repository:{props.itemRepository.name}</span>
            <span>Star:{props.itemRepository.stargazers_count}</span>
            <span>Data:{props.itemRepository.updated_at.split('T')[0]}</span>
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