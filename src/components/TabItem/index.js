// Write your code here

import './index.css'

const TabItem = props => {
  const {tabItem, isActive, onChange} = props
  const {displayText} = tabItem

  const changeButton = () => {
    onChange(tabItem.tabId)
  }

  const activeTabClass = isActive ? 'active-tab' : ''

  return (
    <li className={`tab-item ${activeTabClass}`}>
      <button
        type="button"
        className={`button ${activeTabClass}`}
        onClick={changeButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
