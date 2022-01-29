import { useEffect, useRef } from "react"


function UseRef() {
    const initialRef = useRef(null)
    useEffect(() => {
        initialRef.current.focus()
        console.log("ghjk",initialRef.current)
    }, [])
    return (
        <input type="text" ref={initialRef} />
    )
}

export default UseRef