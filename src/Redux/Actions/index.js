import types from './Actiontypes'
import axios from 'axios'

let rickmortyAPI = 'https://rickandmortyapi.com/api/character/'

export const getFilteredItem = item => ({
  type: types.GET_FILTERED_DATA,
  payload: item
})

export const getAllDataSuccess = data => ({
  type: types.FETCH_DATA_SUCCESS,
  payload: data
})

export const getAllDataFailure = data => ({
  type: types.FETCH_DATA_FAILURE,
  payload: data
})

export const getFilteredRecords = filter => ({
  type: types.SET_CURRENT_FILTERS,
  payload: filter
})

export const filterByName = filter => ({
  type: types.SEARCH_NAME,
  payload: filter
})

export const updatePagination = info => ({
  type: types.UPDATE_PAGINATION,
  payload: info
})

export const getAllData = (filters) => {
  return dispatch => {
    let queryParam = {}
    if (filters) {
      for (let key in filters.species) {
        if (filters.species[key] === true) {
          queryParam['species'] = key
        }
      }

      for (let key in filters.gender) {
        if (filters.gender[key] === true) {
          queryParam['gender'] = key
        }
      }
      if (filters.hasOwnProperty('name')) {
        queryParam['name'] = filters.name;
      }
      if(filters.hasOwnProperty('page')) {
        queryParam['page'] = filters.page;
      }
    }

    axios
      .get(rickmortyAPI, { params: queryParam })
      .then(res => {
        dispatch(getAllDataSuccess(res.data))
        dispatch(updatePagination(res.data.info))
      })
      .catch(err => {
        dispatch(getAllDataFailure(err))
      })
  }
}
