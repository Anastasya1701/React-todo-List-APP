import React from 'react'
import './todoListItem.css'

export default class TodoListItem extends React.Component {


    render() {
        const { label, onDeleted, done, important, onToggleDone, onToggleImportant } = this.props;

        return (
            <span className={done ? "todo-list-item done" : "todo-list-item"} >
                <span
                    className={!done && important ? "todo-list-item-label important" : "todo-list-item-label"}
                    onClick={onToggleDone}>
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i
                        className="fa fa-trash-o"
                        onClick={onDeleted} />
                </button>
            </span>
        )
    }

}
