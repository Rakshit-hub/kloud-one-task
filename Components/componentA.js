import { useContext } from "react";
import { userContext } from "../pages/hookcontext";


function ComponentA() {
    const value = useContext(userContext)
    console.log(value)
    return (
        <>
            <h1>Value-{value.backgroundColor1}</h1>
        </>
    );
}

export default ComponentA;