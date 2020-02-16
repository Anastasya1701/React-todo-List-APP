import React from 'react'
import './style.css'

export default class ItemAddForm extends React.Component {

    state = {
        label: '',
    }

    onChange = (e) => {
        this.setState({
            label: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAded(this.state.label)
        this.setState({
            label: '',
        })
    }

    render() {
        return (
            <form
                className='item-add-form d-flex'
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder='What needs to be done'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.label} />
                <button
                    className='btn btn-outline-secondary'
                >
                    Add Item
                </button>
            </form>
        )
    }
}