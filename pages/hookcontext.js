import React from "react"
import ComponentA from "../Components/componentA"
export const userContext = React.createContext()

const circle = {
    radius1: 20,
    backgroundColor1: 'yellow'
};

const style = {
    backgroundColor2: 'red',
    radius2: 10,
};

const solidCircle = {
    ...circle,
    ...style
};

console.log(solidCircle);



function HookContext() {

    return (
        <>
            <userContext.Provider value={solidCircle}>
                <ComponentA />
            </userContext.Provider>
        </>
    )
}

export default HookContext