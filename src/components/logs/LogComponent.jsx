import { Row, Container, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import LogDataService from '../../api/logs/LogDataService.js'
import React, { Component } from 'react'

class LogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logs: [],
            id: this.props.match.params.id
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.refreshLogs()
    }

    refreshLogs() {
        LogDataService.retrieveLogs(this.state.id)
            .then(
                response => {
                    this.setState({ logs: response.data })
                }
            )
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        return (
            <div>
                <h1>Case Number: {this.state.id} Logs</h1>
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
                                        </Card.Body>
                                    </Card>
                                </div>
                        )}
                    </Row>
                </Container>
            </div>
        )


    }
}

export default LogComponent