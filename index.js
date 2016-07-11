import { createStore } from 'redux'
import React from 'react'
import ReactDom from 'react-dom'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}
const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const store = createStore(counter) // points to the counter fn on line 3

const render = () => {
    ReactDom.render(
        <Counter
        value={store.getState()}
        onIncrement={() =>
            store.dispatch({
                type: 'INCREMENT'
            })
        }
        onDecrement={() =>
            store.dispatch({
                type: 'DECREMENT'
        })
    }
     />, document.getElementById('root')
    );
};

store.subscribe(render);
render();

// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());
export default counter
