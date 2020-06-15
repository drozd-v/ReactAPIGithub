import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Repository from './Repository'
import { withRouter } from 'react-router-dom'
import {showRepository} from '../../redux/reducers/allRepositoryReducer'
import { compose } from 'redux'

const RepositoryComponent = (props) => {
    useEffect(() => {
      let id = props.match.params.id + '/' + props.match.params.name
      props.showRepository(id)
    },[])
  
    return (
        <Repository itemRepository={props.itemRepository} />
      );
  }

let mapStateToProps = (state) => ({
    itemRepository: state.listRepository.itemRepository,
})

export default compose(connect(mapStateToProps, {showRepository}), withRouter)(RepositoryComponent)