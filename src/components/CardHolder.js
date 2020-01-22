import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Paginator from './Paginator'
import styled from 'styled-components';

import { getAllData } from '../Redux/Actions'

const CardOuter = styled.div`
  background: linear-gradient(to right, #ffffff, #fafafa);
`

class CardHolder extends Component {
  fetchData = () => {
    this.props.getAllData()
  }

  componentDidMount = () => {
    this.fetchData()
  }
  render() {
    const { results = [], info } = this.props.data

    return (
      <CardOuter className='row'>

        <Paginator></Paginator>
        <div className='col-12'>
          <div className='row pr-2 pl-1'>
            {results.map(card => {
              return <Card key={card.id} data={card}></Card>
            })}
          </div>
        </div>
      </CardOuter>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  getAllData: () => dispatch(getAllData())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder)
