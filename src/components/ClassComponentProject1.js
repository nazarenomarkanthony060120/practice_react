import React, { Component } from 'react'

class ClassComponentProject1 extends Component {
        
    constructor(props) {
        super(props)
        
        this.state = {
            id: 0,
            items: [],
            count: 0,
            name: '',
            greetings: '',
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })    
    }

    reset = () => {
        this.setState ({
            count: 0
        })
    }

    handleInputName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    greetings = () => {
        const greetings = 'Hello ' + this.state.name + '!'
        if (this.state.name !== '') {
            this.setState({
                greetings: greetings,
                name: ''
            })
        }
       
    }

    addTodoList = () => {
        if (this.state.name !== '') {
            this.setState((prev) => ({
                id: this.state.items.length,
                
                items: [
                    ...prev.items,
                    {
                        id: this.state.id,
                        name: this.state.name
                    }
                ],

                name: ''
            }))
        }
    }
    
    removeTodoList = (id) => {
        const newItem = this.state.items.filter((item) => item.id !== id)
        this.setState({ items: newItem })
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.increment}>Count {this.state.count}</button>
                </div>

                <div>
                    <button onClick={this.increment}>Increment + {this.state.count}</button>
                    <button onClick={this.decrement}>Decrement - {this.state.count}</button>
                </div>

                <div>
                    <button onClick={this.increment}>Increment + {this.state.count}</button>
                    <button onClick={this.decrement}>Decrement - {this.state.count}</button>
                    <button onClick={this.reset}>Reset {this.state.count}</button>
                </div>

                <div>
                    <input type="text" value={this.state.name} onChange={this.handleInputName}/>
                    <button onClick={this.greetings}>Greet</button>
                    {this.state.greetings}
                </div>

                <div>
                    <input type="text" value={this.state.name} onChange={this.handleInputName}/>
                    <button onClick={this.addTodoList}>Todo List</button>
                    <ul>
                        {
                            this.state.items.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <input type="text" value={this.state.name} onChange={this.handleInputName}/>
                    <button onClick={this.addTodoList}>Todo List</button>
                    <ul>
                        {
                            this.state.items.map((item) => (
                                <div>
                                    <li key={item.id}>{item.name}</li>
                                    <button onClick={() => this.removeTodoList(item.id) }>Remove</button>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

export default ClassComponentProject1