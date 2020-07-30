import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/logs/HelloWorldService.js'

export class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: '',
            error: false
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {
        return (
            <>
                {this.state.error && <div className="container">
                    {this.state.welcomeMessage}
                </div>}
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can check out the case logs <Link to="/logs">here!</Link>
                </div>
                {!this.state.error && <div className="container">
                    {this.state.welcomeMessage}
                </div>}
            </>
        );
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleError(error) {
        this.setState({ welcomeMessage: error.response.data.message, error: true })
    }
}

export default WelcomeComponent