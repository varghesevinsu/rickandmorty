import types from '../Actions/Actiontypes'

const initialState = {
  data: [],
  error: [],
  filters: {
    species: {
      human: false,
      alien: false
    },
    gender: {
      male: false,
      female: false
    }
  },
  sort_id: 'asc',
  name: '',
  next:'',
  previous:''
}

const rickmortyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_DATA: {
      return state
    }

    case types.FETCH_DATA_SUCCESS: {
      const newState = {
        ...state,
        data: action.payload,
        next: action.payload.info.next,
        previous: action.payload.info.prev
      }
      return newState
    }

    case types.FETCH_DATA_FAILURE: {
      const newState = {
        ...state,
        data: [],
        error: action.payload
      }
      return newState
    }

    case types.SET_CURRENT_FILTERS: {
      const newState = {
        ...state,
        filters: action.payload
      }
      console.log(newState)
      return newState
    }

    case types.SEARCH_NAME: {
      const newState = {
        ...state,
        name: action.payload.name
      }
      return newState;
    }

    case types.UPDATE_PAGINATION: {
      const newState = {
        ...state,
        next: action.payload.next,
        previous: action.payload.previous
      }
    }

    default:
      return state
  }
}

export default rickmortyReducer
