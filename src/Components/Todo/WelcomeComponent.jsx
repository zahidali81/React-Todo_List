import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <div className = "welcome-text">
                <h1>Welcome!</h1>
                <div className = "container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                </div>
            </>
        );
    }

};

export default WelcomeComponent;