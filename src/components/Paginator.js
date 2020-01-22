import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getAllData } from '../Redux/Actions'

const Paginate = styled.div`
    position: sticky;
    top: 70px;
    z-index: 9;
    .page-link{
        cursor: pointer;
    }
    @media (max-width: 525px) {
        top: 140px;
    }
`

class Paginator extends Component {

    goToPrevious = () => {
        this.doPagination(this.props.previous);
    }

    goToNext = () => {
        this.doPagination(this.props.next);
    }

    doPagination = (page) => {
        const paramString = page.split('?')[1]
        const urlParams = new URLSearchParams(paramString);
        const curFilters = { ...this.props.filters };
        curFilters.page = urlParams.get('page')

        this.props.getAllData(curFilters);
    }
    

    render() {
        return (
            <Paginate className="col-sm-3 offset-sm-9 col-xs-12">
                <nav aria-label="Page navigation example">
                    <ul className="pagination mb-0 mt-2 justify-content-end">
                        <li className="page-item"><span className="page-link" onClick={this.goToPrevious}>Previous</span></li>
                        <li className="page-item"><span className="page-link" onClick={this.goToNext}>Next</span></li>
                    </ul>
                </nav>
            </Paginate>
        )
    }
}

const mapStateToProps = state => ({
    next: state.next,
    previous: state.previous,
    filters: state.filters
})

const mapDispatchToProps = dispatch => ({
    getAllData: (filter) => dispatch(getAllData(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Paginator)