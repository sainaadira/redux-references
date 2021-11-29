import { createStore } from 'redux'
import reducer from './reducer'

// higher order function
const store = createStore(reducer)


export default store