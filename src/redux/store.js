import { legacy_createStore as createStore   } from 'redux'
import allReducers from './reducer/rootReducer'


const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store