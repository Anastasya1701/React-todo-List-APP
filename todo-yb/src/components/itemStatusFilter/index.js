import React from 'react'

export default class ItemStatusFilter extends React.Component {
    // buttons = []

    render() {
        const { filterButton } = this.props

        return (
            <div className="btn-group" onClick={(e) => filterButton(e)}>
                <button type="button"
                    className="all btn btn-info">All</button>
                <button type="button"
                    className="act btn btn-outline-secondary">Active</button>
                <button type="button"
                    className="don btn btn-outline-secondary">Done</button>
            </div>
        );
    }
}

