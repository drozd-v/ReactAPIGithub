import React from 'react'
import { connect } from 'react-redux'
import Repository from './Repository'
import { withRouter } from 'react-router-dom'
import {showRepository} from '../../redux/reducers/allRepositoryReducer'

class RepositoryComponent extends React.Component {
    componentDidMount() {
      let id = this.props.match.params.id + '/' + this.props.match.params.name
      this.props.showRepository(id)
    }
  
    render() {
      return (
        <Repository itemRepository={this.props.itemRepository} />
      );
    }
  }

let mapStateToProps = (state) => ({
    itemRepository: state.listRepository.itemRepository,
})
 
let WithRouterUrl = withRouter(RepositoryComponent)
export default connect(mapStateToProps, {showRepository})(WithRouterUrl)