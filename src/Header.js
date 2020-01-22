import React, { Component } from 'react'
import styled from 'styled-components';
import logo from './assets/images/logo.png'
import Search from './components/Search'

const Div = styled.div`
  padding: 10px 0px;
  background-color: #eaeaea;
  height: 70px;
  line-height: 50px;
  position:sticky;
  top: 0;
  z-index:9;
  img {
    height: 50px;
  }
  @media (max-width: 525px) {
    height: 140px;
  } 
`;

class Header extends Component {

  componentDidMount() {

  }

  render() {
    return (/*  */
      <Div className='row'>
        <div className='col-sm-4 col-xs-12'>
          <img src={logo} alt='Rick and Morty' />
        </div>
        <div className='col-sm-8 col-xs-12'>
          <Search></Search>
        </div>
      </Div>
    )
  }
}

export default Header
