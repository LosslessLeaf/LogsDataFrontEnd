import axios from 'axios'

class LogDataService {

    retrieveAllLogs() {
        return axios.get(`http://localhost:8081/logs`);
    }

    retrieveLog(caseNumber) {
        return axios.get(`http://localhost:8081/logs/${caseNumber}`)
    }
}

export default new LogDataService()
