import React from "react"
import Hoc from "./hoc"

function HoverCounter(props) {
    const { count, handleIncrement } = props
    return (
        <>
            <h1 onMouseOver={handleIncrement}>Clicked {count} times</h1>
        </>
    )
}

export default Hoc(HoverCounter)