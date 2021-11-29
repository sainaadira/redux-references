/*

example of a store in redux

{
  categories: [],
  product: [],
  cart: { },
  user: { }

}
*/


/* updating store: create a function that takes the store as an argument and returns the updated store

reducer (event handlers/processors): function that takes in the current instance store and returns updated store
- they don't touch global state
- they don't mutate their arguments
- and are pure functions with no side effects
*/


function reducer(store) {
  const updatedStore = { ...store }
}

/*
how does a reducer know which properties in the store it should update?
cart? user?  products?

 the reducer needs an addtional building block called: ACTION

 action (an event): an object that describes what just happened?
 - user logged in/ out
 - added an item to their cart

 {
   type: 'bugRemoved', 
   payload: {
     id: 1
   }

}  
** type property belongs in ACTION object
** payload contains minumum information needed about an action

 these events that happen in our app so the action is used as a second param

 based on the type of action, the reducer will know which properties of the state to update.

 each reducer is responsible for updating a specific slice of the store
 ie: each department of the store has its own manager

*/

function reducer(store, action) {
  const updatedStore = { ...store }
}


/*
action - store - reducer:
HOW DO THESE BUILDING BLOCKS WORK TOGETHER?

let's say a user adds an item to their shopping cart
- create an object action and dispatch it

STORE OBJECT HAS DISPATCH METHOD -that takes an action
then it forwards the action to the reducer
(the store is in charge of calling reducer)

reducer computes the new state and returns it
store will set the state internally
and then notifies the UI components about the update

UI components will pull out the updated data and refresh themselves
*/


/*
DISPATCH
is like the entry point to our "STORE"
by dispatching actions, we are sending every action through the same entry point- an central place where we control what should happen every time the user performs an action

YOU CAN:
- log every action (redux dev tools shows actions dispatched and how state has changed)
- you can also undo and redo mechanisms
*/

/* 4 STEPS TO BUILDING AN APP USING REDUX

- design the store : what do you want to keep in the store
- define the actions:  what are actions user can perform in app
- create reducer(s) : take an action and return updates state
- set up the store based on reducer:
*/