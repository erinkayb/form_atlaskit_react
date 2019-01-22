import React, { Component } from "react"
import "./App.css"
import Form from "./components/form"
import Head from "./components/head/head"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Form />
      </div>
    )
  }
}

export default App
