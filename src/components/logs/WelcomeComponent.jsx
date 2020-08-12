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
                <div className="container">
                    <h1 style={{ marginTop: '25px', marginBottom: '25px' }}>
                        Welcome {this.props.match.params.name}. You can check out the case logs <Link to="/logs">here!</Link>

                    </h1>
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