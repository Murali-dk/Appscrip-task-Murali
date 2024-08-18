import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    this.clickMe = () => {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
    return (
      <div className="bg-container">
        <div>
          <h1 className="head">
            The Button has been Clicked <span>{count}</span> times
          </h1>
          <p>Click the button to Increase the count</p>
          <button type="button" onClick={this.clickMe} className="button">
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
