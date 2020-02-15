import React from 'react'
import TodoListItem from '../TodoListItem'
import './style.css'


const TodoList = ({ todoData }) => {

    const elements = todoData.map((element) => {

        const { id, ...itemsProps } = element // all exept id

        return (
            <li className={"list-group-item"}
                key={element.id}>
                <TodoListItem
                    {...itemsProps}
                />
            </li>
        )
    })

    return (
        <ul className={'list-group todo-list'}>
            {elements}
        </ul>
    )
}
export default TodoList