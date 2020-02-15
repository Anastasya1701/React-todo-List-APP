import React from 'react'
import './style.css'

export default class ItemAddForm extends React.Component {

    render() {
        const { onItemAded } = this.props;
        return (
            <div className='item-add-form'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => onItemAded('Hello')}
                >
                    Add Item
                </button>
            </div>
        )
    }
}