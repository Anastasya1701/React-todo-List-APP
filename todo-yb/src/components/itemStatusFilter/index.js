import React from 'react'

export default class ItemStatusFilter extends React.Component {
    buttonsArr = [
        { name: 'all', label: 'All' },
        { name: 'done', label: 'Done' },
        { name: 'active', label: 'Active' }
    ]

    render() {
        const { filterButton, filter } = this.props

        const buttons = this.buttonsArr.map(({ name, label }) => {
            return <button
                type="button"
                className={name === filter ? "btn btn-info" : "btn btn-outline-secondary"}
                key={name}
                onClick={() => filterButton(name)
                }
            >
                {label}
            </button >
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

