import React from 'react';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

  
    renderStat(stat) {
        return (
          <div className="followers-page">
          <h3>Followers of USERNAME</h3>
        </div>
        );
    }
};

export default Followers;
