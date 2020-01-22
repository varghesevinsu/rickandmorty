import React, { Component } from 'react'
import DetailPage from './DetailPage'

class ListPage extends Component {

  calledFromChild = () => {
    alert('Hi');
  }

  render () {
    return (
      <div>
        <p>List Page One</p>
        {this.props.listdata}
        <DetailPage listdata={this.props.listdata} callback={this.calledFromChild}></DetailPage>
      </div>
    )
  }
}

export default ListPage
