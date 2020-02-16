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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: 'all' // done, active
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

  togglePropperty(arr, id, propertyName) {
    // find right element index 
    const idx = arr.findIndex((el) => el.id === id)
    // change done value in this element
    const newItem = { ...arr[idx], [propertyName]: !arr[idx][propertyName] }
    // return new state
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleDone = (id) => {

    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropperty(todoData, id, 'done')
      }
    })

  }

  onToggleImportant = (id) => {

    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropperty(todoData, id, 'important')
      }
    })

  }

  filter(arr, filter) {
    switch (filter) {
      case 'all':
        return arr;
      case 'done':
        return arr.filter(el => el.done);
      case 'active':
        return arr.filter(el => !el.done);
      default:
        return arr;
    }
  }

  onSearchCange = (term) => {
    this.setState({ term })
  }

  filterButton = (filter) => {
    this.setState({ filter })
  }

  search(arr, term) {
    if (term.length === 0) {
      return arr
    }
    return arr.filter(el => {
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  render() {
    const { todoData, term, filter } = this.state

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount

    const visibleItems = this.filter(this.search(todoData, term), filter)

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchCange={this.onSearchCange} />
          <ItemStatusFilter
            filterButton={this.filterButton}
            filter={filter} />
        </div>

        <TodoList
          todoData={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAded={(text) => this.addItem(text)} />
      </div>
    )
  }
}

