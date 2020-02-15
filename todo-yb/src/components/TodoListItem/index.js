import React from 'react'
import './todoListItem.css'

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false,
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            // put inside setState function because setState is async, and we are waiting for final state to toggle it
            return {
                done: !state.done,
            }
        })
    }

    onMarkInportanrt = () => {
        if (!this.state.done) {
            // put inside setState function because setState is async, and we are waiting for final state to toggle it
            this.setState(({ important }) => {
                return {
                    important: !state.important,
                }
            })
        }
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

        return (
            <span className={done ? "todo-list-item done" : "todo-list-item"} >
                <span
                    className={!done && important ? "todo-list-item-label important" : "todo-list-item-label"}
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkInportanrt}>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }

}
