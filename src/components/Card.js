import React, { Component } from 'react'
import styled from 'styled-components'

const CardWrap = styled.div`
  padding: 5px;
  &:first-child {
    padding-left: 10px;
  }
  &:last-child {
    padding-right: 10px;
  }
  .card {
    margin: 5px 0px;
    .card-img-top{
      height: 200px;
    }
    .card-body{
      padding: 5px;
      .card-title{
        font-size:15px;
      }
    }
    .card-text{
      font-size: 11px;
    }
    ul {
      li {
        padding: 5px;
        font-size:12px;
        color: #666;
        .l-title{
          display:inline-block;
          width: 48%;
          font-weight: bold;
        }
        .l-value{
          display: inline-block;
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 525px) {
    width: 50%;
  }
`;

class Card extends Component {
  render() {
    const {
      id,
      name,
      status,
      species,
      gender,
      created,
      origin,
      location,
      image
    } = this.props.data
    return (
      <CardWrap className='col-sm-3 col-xs-4'>
        <div className='card'>
          <img className='card-img-top' src={image} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title mb-0'>{name}</h5>
            <p className='card-text'>
              <span>ID: {id} </span><br /> <span>Created: {created}</span>
            </p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><span className='l-title'>Status</span> <span className='l-value'>{status}</span></li>
            <li className='list-group-item'><span className='l-title'>Species</span> <span className='l-value'> {species}</span></li>
            <li className='list-group-item'><span className='l-title'>Gender</span> <span className='l-value'> {gender}</span></li>
            {/* <li className='list-group-item'>Origin: {origin}</li> */}
            {/* <li className='list-group-item'>Last Location: {location}</li> */}
          </ul>
        </div >
      </CardWrap >
    )
  }
}

export default Card
