import React, { useState } from 'react';
import { browserHistory as history } from 'react-router';

const Search = (props) => {
    const [input, setInput] = useState('');
    const _handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/user/${input}`)
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }
    return (
        <div className="search-page">
            <h2>Type a GitHub username</h2>
            <form onSubmit={_handleSubmit}>
                <input className="search-page__input" type="text" value={input} onChange={handleChange}/>
                <button className="search-page__button">Search</button>
            </form>
        </div>
    );
}



/* class Search extends React.Component {
    constructor(props) {
        super(props);

        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div className="search-page">
                <h2>Type a GitHub username</h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="userInput" className="search-page__input" type="text" />
                    <button className="search-page__button">Search</button>
                </form>
            </div>
        );
    }
}; */

export default Search;
