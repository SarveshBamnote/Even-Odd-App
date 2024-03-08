import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const oddEven = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {oddEven}</p>
          <button className="button" onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
