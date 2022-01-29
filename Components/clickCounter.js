import React from "react"
import { UserConsumer } from "./context"
import Hoc from "./hoc"

function ClickCounter(props) {
    const { count, handleIncrement } = props
    console.log(count)
    return (
        <>
            <UserConsumer>
                {(name) => {
                    console.log(name)
                    return (
                        <button onClick={handleIncrement}> Clicked {count} times</button>
                    )
                }}

            </UserConsumer>
        </>
    )
}

export default Hoc(ClickCounter)