import React, { Component } from 'react'
import { Row, Container, ListGroup, ListGroupItem, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class ListLogsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
            currentPage: 1,
            postsPerPage: 9
        };
    }

    componentDidMount() {
        if (localStorage.getItem('logs') != null) {

            setTimeout(() => {
                //     // this.setState({ logs: this.props.logs })
                //     localStorage.setItem('logs', this.props.logs);
                this.setState({ logs: JSON.parse(localStorage.getItem('logs')) });
            }, 1000);
        }
    }

    render() {

        // Get current posts

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.logs.slice(indexOfFirstPost, indexOfLastPost);
        const pageNumbers = [];

        for (let i = this.state.currentPage; i <= Math.ceil(this.state.logs.length / this.state.postsPerPage); i++) {
            if (this.state.currentPage !== 1 && i - 3 === this.state.currentPage - 3) {
                pageNumbers.push("↞");
            }
            if (this.state.currentPage !== 1 && i - 2 === this.state.currentPage - 2) {
                pageNumbers.push(1);
            }
            if (this.state.currentPage !== 1 && i - 1 === this.state.currentPage - 1) {
                pageNumbers.push("...");
            }
            if (i < this.state.currentPage + 8) {
                pageNumbers.push(i);
            }
            if (i === this.state.currentPage + 8) {
                pageNumbers.push("...")
            }
            if (i === this.state.currentPage + 9) {
                pageNumbers.push(Math.ceil(this.state.logs.length / this.state.postsPerPage))
            }
            if (i === this.state.currentPage + 10) {
                pageNumbers.push("↠");
            }
            // if (i > 10) {

            // }
            // if (i === this.state.postsPerPage - 1) {
            //     pageNumbers.push(i);
            // }
            // pageNumbers.push(i);

        }

        // Change page

        const paginate = (pageNumber) => {
            if (isNaN(pageNumber) !== true) {
                this.setState({ currentPage: pageNumber });
            } else if (pageNumber === "↞") {
                this.setState({ currentPage: this.state.currentPage - 1 })
            } else if (pageNumber === "↠") {
                this.setState({ currentPage: this.state.currentPage + 1 })
            }
            //  else {
            //     this.setState({ currentPage: this.state.currentPage + 8 })
            // }
        }
        return (
            <div>
                <h1 style={{ marginTop: '25px', marginBottom: '25px' }}>Police Case Logs</h1>


                {currentPosts && <div className="container">
                    <Container fluid>
                        <Row>
                            {currentPosts.map(
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
                        <nav style={{ display: 'flex', justifyContent: 'center' }}>
                            <ul className="pagination">
                                {pageNumbers.map(number => (
                                    <li key={number} className="page-item">
                                        <button onClick={() => paginate(number)} className="page-link" style={{ width: '75px', height: '50px' }}>
                                            {number === this.state.currentPage && <span style={{ fontSize: '2em' }}>{number}</span>}
                                            {number !== this.state.currentPage && number
                                            }
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Container>
                </div>}
            </div >
        );
    }
}

export default ListLogsComponent