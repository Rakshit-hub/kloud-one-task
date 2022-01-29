import React from "react"

function Counter() {
    const [items, setItems] = React.useState([])

    const AddItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.round(Math.random() * 100)
        }])
    }
    return (

        <>
            {console.log(items)}
            <button onClick={AddItem}>Add Item</button>
            {items.map((item) => (
                <>
                    <h1 key={item.id}>{item.value}</h1>
                </>
            ))}
        </>
    )
}

export default Counter