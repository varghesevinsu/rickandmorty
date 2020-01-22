import { createStore, applyMiddleware } from 'redux';
import rickmortyReducer from "../Reducer";
import thunk from 'redux-thunk';

const store = createStore(rickmortyReducer, applyMiddleware(thunk));

export default store;