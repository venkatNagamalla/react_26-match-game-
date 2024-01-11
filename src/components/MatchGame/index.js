import {Component} from 'react'
import NavBar from '../NavBar'
import Tabs from '../Tabs'
import ImageItem from '../ImageItem'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 60,
      score: 0,
      showResult: false,
      imageUrl: props.imagesList[0].imageUrl,
      activeTab: props.tabsList[0].tabId,
    }
  }

  componentDidMount = () => {
    this.timeInterval = setInterval(this.getTimer, 1000)
  }

  getTimer = () => {
    const {timer} = this.state
    if (timer === 0) {
      clearInterval(this.timeInterval)
      this.setState({showResult: true})
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  onTabClick = tabId => {
    this.setState({activeTab: tabId})
  }

  getFilteredList = () => {
    const {activeTab} = this.state
    const {imagesList} = this.props
    const filteredItems = imagesList.filter(
      eachImage => eachImage.category === activeTab,
    )
    return filteredItems
  }

  checkingImages = clickedImageUrl => {
    const {imageUrl} = this.state
    const {imagesList} = this.props
    if (imageUrl === clickedImageUrl) {
      const randomNum = Math.floor(Math.random() * imagesList.length)
      const newImageUrl = imagesList[randomNum].imageUrl
      this.setState({imageUrl: newImageUrl})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      clearInterval(this.timeInterval)
      this.setState({showResult: true})
    }
  }

  continueGame = () => {
    const {imageUrl, activeTab} = this.state
    const {tabsList} = this.props
    const filteredList = this.getFilteredList()

    return (
      <>
        <img src={imageUrl} className="image" alt="match" />
        <ul className="tabs-container">
          {tabsList.map(eachTab => (
            <Tabs
              key={eachTab.tabId}
              onTabClick={this.onTabClick}
              tabDetails={eachTab}
              isTabSelected={activeTab === eachTab.tabId}
            />
          ))}
        </ul>
        <ul className="images-container">
          {filteredList.map(eachImg => (
            <ImageItem
              key={eachImg.id}
              checkingImages={this.checkingImages}
              imageDetails={eachImg}
            />
          ))}
        </ul>
      </>
    )
  }

  onReset = () => {
    const {imagesList, tabsList} = this.props
    this.setState({
      score: 0,
      imageUrl: imagesList[0].imageUrl,
      timer: 60,
      showResult: false,
      activeTab: tabsList[0].tabId,
    })

    this.timeInterval = setInterval(this.getTimer, 1000)
  }

  renderResult = () => {
    const {score} = this.state
    return (
      <div className="result-container">
        <img
          className="trophy-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="your-score-heading">YOUR SCORE</p>
        <p className="final-score-count">{score}</p>
        <div className="play-again-button-container">
          <img
            className="reset-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <button
            className="play-again-button"
            onClick={this.onReset}
            type="button"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {timer, score, showResult} = this.state

    return (
      <div className="bg-container">
        <NavBar score={score} timer={timer} />
        <div className="inner-container">
          {/* {timer === 0 ? this.renderResult() : this.continueGame()} */}
          {showResult ? this.renderResult() : this.continueGame()}
        </div>
      </div>
    )
  }
}

export default MatchGame
