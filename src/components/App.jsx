import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
    const {children} = props;
    return (
        <div className="main-app">
            <header className="main-header">
                <h1><Link to="/"> Maria's GitHub Project </Link></h1>
            </header>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}


export default App;
