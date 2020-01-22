import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import SelectedFilters from './components/SelectedFilters'
import CardHolder from './components/CardHolder'
import Filter from './components/Filter'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';

const Sidebar = styled.div`
  background: linear-gradient(to bottom, #232542, #4b4e7d);
  height: calc(100vh - 70px);
  position:sticky;
  top: 70px;
  @media (max-width: 525px) {
    height: auto;
    display: none;
    top: 140px;
    &.show-side-bar {
      display: block;
      padding-bottom: 10px;
    }
  }
`
const FilterButton = styled.button`
  display: none;
  @media (max-width: 525px) {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 99;
    cursor: pointer;
    display: block;
    background: #494c7a;
    color: #fff;
    border: 1px solid #494c7a;
    padding: 5px 10px;
  }
`

function App() {

  const [state, setState] = useState({
    sidebarClass: ''
  });

  const toggleSidebarClass = () => {
    setState({
      sidebarClass: !state.sidebarClass ? 'show-side-bar' : ''
    })
  }

  return (
    <div className='container-fluid'>
      <FilterButton class='btn btn-primary show-filter' onClick={toggleSidebarClass}><FaBars /></FilterButton>
      <Header>
      </Header>
      <div className='row d-block d-sm-none'>

      </div>
      <div className='row'>
        <Sidebar className={'col-sm-3 col-xs-12 ' + state.sidebarClass}>
          <Filter></Filter>
        </Sidebar>
        <div className='col-sm-9 col-xs-12'>
          <SelectedFilters></SelectedFilters>
          <CardHolder></CardHolder>
        </div>
      </div>
    </div>
  )
}

export default App
