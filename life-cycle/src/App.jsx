import { Component } from "react"
import Content from "./components/content"
import JsonPlaceHolder from "./components/JsonPlaceHolder"
import SmartPhone from "./components/SmartPhone"
import Category from "./components/Category"
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: false
    }
  }

  handleToggleContent = () => {
    this.setState({
      showContent: !this.state.showContent
    })
  }
  render() {
    return (
      <>
        {/* <SmartPhone/> */}
        <div className="container">
          <button className="btn btn-danger"
            onClick={this.handleToggleContent}
          >Toggle Content</button>
        </div>
        {
          this.state.showContent && <Category/>
        }
      </>
    )
  }
}

export default App

// immutable = bất biến
// mutable = biến đổi