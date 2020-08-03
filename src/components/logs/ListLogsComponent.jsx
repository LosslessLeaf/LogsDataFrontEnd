import React, { Component } from 'react'
import { Row, Container, ListGroup, ListGroupItem, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogDataService from '../../api/logs/LogDataService.js'

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
        LogDataService.retrieveAllLogs()
            .then(
                response => {
                    this.setState({ logs: response.data })
                }
            )
    }

    render() {
        return (
            <div>
                <h1>Police Case Logs</h1>
                {/* {this.state.message && <div className="alert alert-success">{this.state.message}</div>} */}
                <div className="container">
                    {/* <table className="table">
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

                        </tbody>
                    </table> */}

                    <Container fluid>
                        <Row fluid>
                            {this.state.logs.map(
                                log =>
                                    <div style={{ width: '33%' }}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title><u>Case:</u> {log.caseNumber}</Card.Title>
                                                <Card.Subtitle style={{ marginBottom: '10px' }}><u>Location:</u> {log.location}</Card.Subtitle>
                                                <Card.Subtitle style={{ marginBottom: '10px' }}><u>Reported on:</u> {log.reportedDate}</Card.Subtitle>

                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>{log.offenseDesc}</ListGroupItem>
                                                    <ListGroupItem>{log.statuteCode}</ListGroupItem>
                                                    <ListGroupItem>{log.statuteDesc}</ListGroupItem>
                                                </ListGroup>
                                                <Link to={`/logs/${log.caseNumber}`}><Button style={{ marginTop: '10px' }} class="caselog-card" variant="info">{log.caseNumber}</Button></Link>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                // log => <tr key={log.id}>
                                //     <td>{log.caseNumber}</td>
                                //     <td>{log.location}</td>
                                //     <td>{log.reportedDate}</td>
                                //     <td>{log.offenseDesc}</td>
                                //     <td>{log.statuteCode}</td>
                                //     <td>{log.statuteDesc}</td>
                                // </tr>
                            )}
                            {/* {/* <Row> */}
                            {/* <Col>1 of 1</Col> */}
                        </Row>
                    </Container>
                </div>

            </div >
        );
    }
}

export default ListLogsComponent