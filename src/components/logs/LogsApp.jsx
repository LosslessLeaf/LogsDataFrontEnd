import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListLogsComponent from './ListLogsComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import SpecificLogComponent from './SpecificLogComponent.jsx'

class LogsApp extends Component {
    render() {
        return (
            <div className="LogsApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={ListLogsComponent} />
                            <Route path="/logs/:id" component={SpecificLogComponent} />
                            <Route path="/logs" component={ListLogsComponent} />
                            <Route path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        {/* <FooterComponent /> */}
                    </>
                </Router>
            </div>
        )
    }
}

export default LogsApp