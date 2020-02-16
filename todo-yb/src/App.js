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

  oldTodoDate = this.state.todoData


  filterButton(e) {
    if (e.target.classList.contains("act")) {
      this.setState(({ todoData }) => {
        return {
          todoData: todoData.filter(el => !el.done)
        }
      })
    }
    if (e.target.classList.contains("all")) {
      this.setState(() => {
        return {
          todoData: this.oldTodoDate
        }
      })
    }
    if (e.target.classList.contains("don")) {
      this.setState(({ todoData }) => {
        return {
          todoData: todoData.filter(el => el.done)
        }
      })
    }

  }

  onSearchCange = (term) => {
    this.setState({ term })
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
    const { todoData, term } = this.state

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount

    const visibleItems = this.search(todoData, term)

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchCange={this.onSearchCange} />
          <ItemStatusFilter filterButton={(e) => this.filterButton(e)} />
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

