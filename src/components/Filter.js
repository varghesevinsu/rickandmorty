import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getFilteredRecords, getAllData } from '../Redux/Actions'

const Header = styled.h4`
  font-size: 15px;
  padding: 15px 0px 5px;
  color: #eaeaea;
`

class Filter extends Component {
  handleChange = e => {
    const target = e.target;

    let curFilters = { ...this.props.filters };
    curFilters.name = this.props.name;
    for (let key in curFilters[target.name]) {
      if (key === target.value) {
        curFilters[target.name][key] = true;
      } else {
        curFilters[target.name][key] = false;
      }
    }

    this.props.filterCards(curFilters)
    this.props.getAllData(curFilters)
  }
  render() {
    return (
      <div>
        <Header>Species</Header>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="species" id="human" value="human" onChange={this.handleChange}
                checked={this.props.filters.species.human} />
              <label className="form-check-label" htmlFor="human">
                Human
              </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="species" id="alien" value="alien" onChange={this.handleChange}
                checked={this.props.filters.species.alien} />
              <label className="form-check-label" htmlFor="alien">
                Alien
              </label>
            </div>
          </li>
        </ul>

        <Header>Gender</Header>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={this.handleChange}
                checked={this.props.filters.gender.male} />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={this.handleChange}
                checked={this.props.filters.gender.female} />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  name: state.name
})

const mapDispatchToProps = dispatch => ({
  filterCards: filter => dispatch(getFilteredRecords(filter)),
  getAllData: filter => dispatch(getAllData(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
