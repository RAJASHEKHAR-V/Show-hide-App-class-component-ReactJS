import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstCard = () => {
    const {firstName} = this.state

    if (firstName === false) {
      this.setState(() => ({firstName: true}))
    } else {
      this.setState(() => ({firstName: false}))
    }
  }

  onSecondCard = () => {
    const {lastName} = this.state

    if (lastName === false) {
      this.setState(() => ({lastName: true}))
    } else {
      this.setState(() => ({lastName: false}))
    }
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-Container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div className="firsNameCard">
            <div>
              <button
                className="button"
                type="submit"
                onClick={this.onFirstCard}
              >
                Show/Hide FirstName
              </button>
            </div>
            {firstName ? <p className="fistNameStyle">Joe</p> : null}
          </div>
          <div className="lastNameCard">
            <div>
              <button
                className="button"
                type="submit"
                onClick={this.onSecondCard}
              >
                Show/Hide LastName
              </button>
            </div>
            {lastName ? <p className="lastNameStyle">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
