import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: {
      recipient: "",
      message: ""
    }
  };
  sendText = e => {
    const { text } = this.state;
    fetch(
      `http://localhost:4000/send-text?recipient=${
        text.recipient
      }&textmessage=${text.message}`
    ).catch(err => console.log(err));
  };
  render() {
    return <div className="App" />;
  }
}

export default App;
