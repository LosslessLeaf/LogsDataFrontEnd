import React, { Component } from 'react'
// import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import LogDataService from '../../api/logs/LogDataService.js'
// import AuthenticationService from './AuthenticationService.js'

class LogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            caseNumber: '',
            // targetDate: moment(new Date()).format('YYYY-MM-DD')
            location: '',
            // reportedDate: '',
            // offenseDesc: '',
            // statuteCode: '',
            // statuteDesc: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        // this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        // let username = AuthenticationService.getLoggedInUser()
        LogDataService.retrieveLog(this.state.id)
            .then(response => this.setState({
                caseNumber: response.data.caseNumber,
                // targetDate: moment(new Date()).format('YYYY-MM-DD')
                location: response.data.location,
                // reportedDate: response.data.reportedDate,
                // offenseDesc: response.data.offenseDesc,
                // statuteCode: response.data.statuteCode,
                // statuteDesc: response.data.statuteDesc
            }))
    }

    // validate(values) {
    //     let errors = {}
    //     if (!values.description) {
    //         errors.description = "Enter a Description"
    //     } else if (values.description.length < 5) {
    //         errors.description = "Enter a Description of at least 5 characters"
    //     }

    //     if (!moment(values.targetDate).isValid()) {
    //         errors.targetDate = "Enter a valid Target Date"
    //     }



    //     return errors
    // }



    onSubmit(values) {
        console.log(values)
    }

    render() {
        // let description = this.state.description
        // let targetDate = this.state.targetDate
        let caseNumber = this.state.caseNumber
        let location = this.state.location
        // let reportedDate = this.state.reportedDate
        // let offenseDesc = this.state.offenseDesc
        // let statuteCode = this.state.statuteCode
        // let statuteDesc = this.state.statuteDesc

        return (
            <div>
                <h1>Log</h1>
                <div className="container">
                    <Formik
                        initialValues={{ caseNumber, location }}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="caseNumber" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="location" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Case Number</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Location</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )


    }
}

export default LogComponent