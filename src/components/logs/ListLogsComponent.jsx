import React, { Component } from 'react'
import { Row, Container, ListGroup, ListGroupItem, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogDataService from '../../api/logs/LogDataService.js'

export class ListLogsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: []
        };
        this.getLogs = this.getLogs.bind(this)
    }

    componentDidMount() {
        this.getLogs();
    }

    getLogs() {
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
                <h1 style={{ marginTop: '25px', marginBottom: '25px' }}>Police Case Logs</h1>
                <div className="container">
                    <Container fluid>
                        <Row>
                            {this.state.logs.map(
                                log =>
                                    <div style={{ width: '33%' }}>
                                        <Card style={{ width: '18rem', marginTop: '25px', marginBottom: '25px' }}>
                                            <Card.Body>
                                                <Card.Title><u>Case:</u> {log.caseNumber}</Card.Title>
                                                <Card.Subtitle style={{ marginBottom: '10px' }}><u>Location:</u> {log.location}</Card.Subtitle>
                                                <Card.Subtitle style={{ marginBottom: '10px' }}><u>Reported on:</u> {log.reportedDate}</Card.Subtitle>

                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem><u>Offense Desc:</u> {log.offenseDesc}</ListGroupItem>
                                                    <ListGroupItem><u>Statute Code:</u> {log.statuteCode}</ListGroupItem>
                                                    <ListGroupItem>{log.statuteDesc}</ListGroupItem>
                                                </ListGroup>
                                                <Link to={`/logs/${log.caseNumber}`}><Button style={{ marginTop: '10px', marginBottom: '-10px' }} className="caselog-card" variant="info">Search Casenumber</Button></Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                            )}
                        </Row>
                    </Container>
                </div>

            </div >
        );
    }
}

export default ListLogsComponent