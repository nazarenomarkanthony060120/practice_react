import React, { useState } from 'react'

const FunctionalComponentProject1 = () => {

    const [ count, setCount ] = useState(0)
    const [ values, setValues ] = useState({
        id: 0,
        name: '',
        greet: ''
    })

    const [ items, setItems ] = useState([])

    const greet = () => {
        if (values.name !== '') {
            setValues({
                greet: 'Hello ' + values.name + '!',
                name: ''
            })
        }
    }

    const addTodoList = () => {
        if (values.name !== '') {
            setItems((prev) => 
            [ 
                ...prev, 
                {
                    id: items.length,
                    name: values.name
                }
            ])

            setValues({ name: '' })
        }
    }

    const removeTodoList = (id) => {
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
    }

    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            </div>

            <div>
                <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
                <button onClick={() => setCount(count - 1)}>Decrement: {count}</button>
            </div>

            <div>
                <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
                <button onClick={() => setCount(count - 1)}>Decrement: {count}</button>
                <button onClick={() => setCount(0)}>Reset: {count}</button>
            </div>

            <div>
                <input type="text" value={values.name} onChange={(e) => setValues({ name: e.target.value })}/>
                <button onClick={greet}>Greet</button>
                {values.greet}
            </div>

            <div>
                <input type="text" value={values.name} onChange={(e) => setValues({ name: e.target.value })}/>
                <button onClick={ addTodoList }>Todo List</button>

                <ul>
                    {
                        items.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <input type="text" value={values.name} onChange={(e) => setValues({ name: e.target.value })} />
                <button onClick={ addTodoList }>Todo List</button>
                <ul>
                    {
                        items.map((item) => (
                            <div>
                                <li key={item.id}>{item.name}</li>
                                <button onClick={ () => removeTodoList(item.id) }>Remove</button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default FunctionalComponentProject1