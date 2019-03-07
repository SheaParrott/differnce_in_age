import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientProfile: {
        name: 'allan',
        birthDateC: ''
      }
    }
  }
  changeState = () => {
    // this represents the data received from Redux
    this.setState({
      patientProfile: {
        name: 'allan',
        birthDateC: '1950-05-06'
      }
    })
  }
  DifferenceOfYears = year => {
    console.log('patient full year :' + year)
    console.log('the current type of value :' + typeof year)

    let currentDate = new Date().toLocaleDateString()
    console.log('current date :' + currentDate)

    let currentDateFormatted = currentDate.slice(4, 8)
    console.log('current year :' + currentDateFormatted)

    year = parseInt(year.slice(0, 4))
    console.log('patient birth year :' + year)
    console.log('the current type of value :' + typeof year)

    let difference = currentDateFormatted - year
    console.log('patients age :' + difference)

    return difference
  }
  // here is the function simplified into a one liner
  birthYear = birthDate =>
    birthDate
      ? new Date().toLocaleDateString().slice(4, 8) - birthDate.slice(0, 4)
      : null

  render() {
    let year = this.state.patientProfile.birthDateC
      ? this.state.patientProfile.birthDateC
      : ''
    return (
      <div className="App">
        <button onClick={this.changeState}>received data</button>
        <p>{year ? this.DifferenceOfYears(year) : null}</p>
        <h2>{year ? this.birthYear(year) : null}</h2>
      </div>
    )
  }
}

export default App
