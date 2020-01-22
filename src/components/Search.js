import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllData, filterByName } from '../Redux/Actions'
import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  background: #efeeee;
  border-color: #eaeaea;
  &:hover, &:focus{
    border-color: #ccc;
    background: #fff;
  }
`

class Search extends Component {

  handleChange = (e) => {
    this.props.filterByName({
      [e.target.name]: e.target.value
    })
  }

  searchName = (e) => {
    if (e.which === 13) {
      
      const curFilters = { ...this.props.filters };
      curFilters[e.target.name] = e.target.value
      this.props.getAllData(curFilters);
    }
  }

  render() {
    return (
      <div>
        <Input className='form-control' name='name' placeholder='Search Character by Name' value={this.props.name} 
        onChange={this.handleChange}
        onKeyPress={this.searchName} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.name,
  filters: state.filters
})

const mapDispatchToProps = dispatch => ({
  getAllData: (filter) => dispatch(getAllData(filter)),
  filterByName: (filter) => dispatch(filterByName(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
