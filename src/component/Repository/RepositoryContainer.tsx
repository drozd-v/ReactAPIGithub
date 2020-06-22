import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Repository from './Repository'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {showRepository, ItemRepositoryType} from '../../redux/reducers/allRepositoryReducer'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'

type PathParamsType = {
  name: string,
  id: string
}

type MapDispatchPropsType = {
  showRepository: (id: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;

const RepositoryContainer:React.FC<PropsType> = (props) => {
    useEffect(() => {
      let id = props.match.params.id + '/' + props.match.params.name
      props.showRepository(id)
    },[])
  
    return (
        <Repository itemRepository={props.itemRepository} />
      );
  }

export type MapStateToPropsType = {
  itemRepository: ItemRepositoryType,
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    itemRepository: state.listRepository.itemRepository,
})

export default compose<React.ComponentType>(connect(mapStateToProps, {showRepository}), withRouter)(RepositoryContainer)