import store from './store'
import { bugAdded, bugRemoved, bugResolved } from './actions'

// state = reducer(state, action) ** interal state of the store
// notify the subscribers


// function that gets called every time the state of store get changed
// UI components should subscribe to the store so they get notified when the state of the store changes
// subscribe method returns a function for unsubcribing from the store 
const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState())
})

store.dispatch(bugAdded('Bug 1'))

unsubscribe()

store.dispatch(bugResolved(1))

store.dispatch(bugRemoved)



console.log(store.getState())