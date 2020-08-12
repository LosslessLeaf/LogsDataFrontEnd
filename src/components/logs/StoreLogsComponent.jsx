import { Component } from 'react'
import LogDataService from '../../api/logs/LogDataService.js'

export class StoreLogsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
            isUpdating: false
        };
        this.refreshLogs = this.refreshLogs.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData()
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

    fetchData() {
        if (this.state.logs.length() > 0) {
            this.state.props.match.isUpdating = false;
        }
        this.state.props.match.isUpdating = true;
        return <h1>Getting data...</h1>
    }
}

export default StoreLogsComponent;