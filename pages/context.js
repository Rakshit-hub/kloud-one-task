import React from "react"
import ClickCounter from "../Components/clickCounter"
import { UserProvider } from "../Components/context"
import HoverCounter from "../Components/hoverCounter"


const Practise = () => {
    const obj = {
        name: "rakshit",
        id: 2
    }
    const demo = {
        name: "demo",
        id: 3
    }
    return (
        <>
            <UserProvider value={obj,demo}>
                <ClickCounter />
                <HoverCounter />
            </UserProvider>
        </>
    )
}

export default Practise