import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectedFilters extends Component {
  render () {
    const filters = this.props.data || [];  
    return <div>{
        
    }</div>
  }
}

const mapStateToProps = state => ({
  data: state.filters
})

export default connect(mapStateToProps, null)(SelectedFilters)
