import * as React from "react";
const { Component } = React;
class WordRelay extends React.Component {
  state = {
    text: "Hello , webpack",
  };

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default WordRelay;
