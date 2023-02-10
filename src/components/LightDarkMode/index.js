// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {theme: true}

  changeTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
    console.log('clicked')
  }

  render() {
    const {theme} = this.state
    const container = theme ? 'dark' : 'light'
    const buttonText = theme ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="whole-container">
        <div className={container}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeTheme}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
