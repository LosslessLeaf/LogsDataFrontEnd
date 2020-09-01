import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListLogsComponent from './ListLogsComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import SpecificLogComponent from './SpecificLogComponent.jsx'
import LogDataService from '../../api/logs/LogDataService.js'
// import ErrorComponent from './ErrorComponent.jsx'
// import LogoutComponent from './LogoutComponent.jsx'

class LogsApp extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     logs: []
        // };
        this.getLogs = this.getLogs.bind(this)
    }

    componentDidMount() {
        if (localStorage.getItem('logs') === null) {
            this.getLogs();
        }
    }

    getLogs() {
        LogDataService.retrieveAllLogs()
            .then(
                response => {
                    // this.setState({ logs: response.data })
                    localStorage.setItem('logs', JSON.stringify(response.data));
                }
            )
    }

    render() {
        return (
            <div className="LogsApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact render={() => <ListLogsComponent />} />
                            <Route path="/logs/:id" component={SpecificLogComponent} />
                            <Route path="/logs" exact render={() => <ListLogsComponent />} />
                            {/* <Route path="/logout" component={LogoutComponent} /> */}
                            {/* <Route component={ErrorComponent} /> */}
                        </Switch>
                        {/* <FooterComponent /> */}
                    </>
                </Router>
            </div>
        )
    }
}

export default LogsApp