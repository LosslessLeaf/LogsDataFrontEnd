import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://data.providenceri.gov/" className="navbar-brand">Providence Open Data</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/logs">Case Logs</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default withRouter(HeaderComponent);