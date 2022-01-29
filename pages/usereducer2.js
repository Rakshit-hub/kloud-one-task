import { useReducer } from "react"

const initialState = {
    firstCounter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
        case 'Reset':
            return initialState
        default:
            return state

    }

}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            count----{count.firstCounter}
            <button onClick={() => dispatch({
                type: 'increment',
                value: 5
            })}>Increment</button>
            <button onClick={() => dispatch({
                type: 'decrement',
                value: 5
            })}>Decrement</button>
            <button onClick={() => dispatch({
                type: 'Reset',
                value: 5
            })}>Reset</button>

        </>
    )
}

export default CounterTwo