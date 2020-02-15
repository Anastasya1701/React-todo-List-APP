import React from 'react'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'
import ItemStatusFilter from './components/itemStatusFilter'
import ItemAddForm from './components/ItemAddForm'


export default class App extends React.Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffe'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],

  }

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      id: this.maxId++,
      done: false
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // Main rule! you should not change current state, you should return new updated state
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

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr,
      }
    })
  }

  onToggleDone = (id) => {

    this.setState(({ todoData }) => {
      // find right element index 
      const idx = todoData.findIndex((el) => el.id === id)
      // change done value in this element
      const newItem = { ...todoData[idx], done: !todoData[idx].done }
      // return new state
      const newState = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newState
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      // find right element index 
      const idx = todoData.findIndex((el) => el.id === id)
      // change important value in this element
      const newItem = { ...todoData[idx], important: !todoData[idx].important }
      // return new state
      const newState = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newState
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
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAded={(text) => this.addItem(text)} />
      </div>
    )
  }
}

