import {Component} from 'react'

class QuantityButton extends Component {
  state = {
    number: 1,
  }

  onDecreaseTimerLimitInMinutes = () => {
    const {number} = this.state

    if (number > 1) {
      this.setState(prevState => ({
        number: prevState.number - 1,
      }))
    }
  }

  onIncreaseTimerLimitInMinutes = () =>
    this.setState(prevState => ({
      number: prevState.number + 1,
    }))

  renderTimerLimitController = () => {
    const {number} = this.state

    return (
      <div className="timer-limit-controller-container">
        <p className="limit-label">Set Timer limit</p>
        <div className="timer-limit-controller">
          <button
            className="limit-controller-button"
            onClick={this.onDecreaseTimerLimitInMinutes}
            type="button"
          >
            -
          </button>
          <div className="limit-label-and-value-container">
            <p className="limit-value">{number}</p>
          </div>
          <button
            className="limit-controller-button"
            onClick={this.onIncreaseTimerLimitInMinutes}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    )
  }
  render() {
    return ({this.renderTimerLimitController()})
    }
}
export default QuantityButton
