import './index.css'

const Tabs = props => {
  const {tabDetails, onTabClick, isTabSelected} = props
  const {tabId, displayText} = tabDetails

  const tabClick = () => {
    onTabClick(tabId)
  }
  const tabChange = isTabSelected ? 'tab-selected-text' : 'tab-text'
  return (
    <li>
      <button onClick={tabClick} className="tab-btn" type="button">
        <p className={tabChange}>{displayText}</p>
      </button>
    </li>
  )
}

export default Tabs
