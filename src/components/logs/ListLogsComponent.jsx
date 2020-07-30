import React, { Component } from 'react';
import LogDataService from '../../api/logs/LogDataService.js'
// import AuthenticationService from './AuthenticationService.js'

export class ListLogsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
            message: null
        };
        this.refreshLogs = this.refreshLogs.bind(this)
    }

    componentDidMount() {
        this.refreshLogs()
    }

    refreshLogs() {
        // let username = AuthenticationService.getLoggedInUser();
        LogDataService.retrieveAllLogs()
            .then(
                response => {
                    this.setState({ logs: response.data })
                }
            )
    }

    // deleteTodoClicked(id) {
    //     let username = AuthenticationService.getLoggedInUser()
    //     console.log(id, username)

    //     TodoDataService.deleteTodo(username, id)
    //         .then(
    //             response => {
    //                 this.setState({ message: `Delete of todo ${id} successful` });
    //                 this.refreshTodos();
    //             }
    //         )
    // }

    // updateTodoClicked(id) {

    //     this.props.history.push(`/todos/${id}`)


    // }


    render() {
        return (
            <div>
                <h1>Police Case Logs</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Case Number</th>
                                <th>Location</th>
                                <th>Reported Date</th>
                                <th>Offense Desc.</th>
                                <th>Statute Code</th>
                                <th>Statute Desc.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.logs.map(
                                log => <tr key={log.id}>
                                    <td>{log.caseNumber}</td>
                                    <td>{log.location}</td>
                                    <td>{log.reportedDate}</td>
                                    <td>{log.offenseDesc}</td>
                                    <td>{log.statuteCode}</td>
                                    <td>{log.statuteDesc}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div >
        );
    }
}

export default ListLogsComponent