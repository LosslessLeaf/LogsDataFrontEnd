import axios from 'axios'

class LogDataService {

    retrieveAllLogs() {
        return axios.get(`http://localhost:8081/logs`);
    }

    retrieveLogs(caseNumber) {
        return axios.get(`http://localhost:8081/logs/${caseNumber}`)
    }
}

export default new LogDataService()
