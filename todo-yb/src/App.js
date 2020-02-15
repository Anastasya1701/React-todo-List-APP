import React from 'react'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'
import ItemStatusFilter from './components/itemStatusFilter'


export default class App extends React.Component {

  state = {
    todoData: [
      { label: 'Drink Coffe', id: 0, important: false },
      { label: 'Make Awesome App', id: 1, important: true },
      { label: 'Have a lunch', id: 2, important: false },
    ]
  }


  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newState = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      console.log(newState);


      return {
        todoData: newState,
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todoData={this.state.todoData}
          onDeleted={this.deleteItem}
        />
      </div>
    )
  }
}

