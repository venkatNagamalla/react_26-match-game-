import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {timer, score} = this.props

    return (
      <nav className="navbar-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <ul className="score-container">
          <li className="score-heading">
            <p>
              Score: <span className="score-count">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="timer-count">{timer} sec</p>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
