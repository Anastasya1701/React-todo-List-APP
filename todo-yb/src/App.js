import React from 'react'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'
import ItemStatusFilter from './components/itemStatusFilter'


function App() {

  const todoData = [
    { label: 'Drink Coffe', id: 0, important: false },
    { label: 'Make Awesome App', id: 1, important: true },
    { label: 'Have a lunch', id: 2, important: false },
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todoData={todoData} />
    </div>
  )
}

export default App