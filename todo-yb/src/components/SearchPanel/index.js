import React from 'react'

export default class SerachPanel extends React.Component {

    state = {
        term: ''
    }

    onChange = (e) => {
        const term = e.target.value
        this.setState({ term })
        this.props.onSearchCange(term)
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                onChange={this.onChange}
                value={this.state.term}
            />
        )
    }
}