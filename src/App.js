import React, { Component } from 'react'
import LogsApp from './components/logs/LogsApp'
import './App.css'
import './bootstrap.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <LogsApp />
            </div>
        )
    }
}

export default App;