import React, { Component } from "react";
import { random } from "lodash";
import "./App.css";
import "./components/Button";
import QuoteMachine from "./components/QuoteMachine";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    // check line37-39: Concise coding style of ES7
    // this.selectedQuoteIndex = this.selectedQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectedQuoteIndex() {
    if (!this.state.quotes.length) return undefined; // return undefined
    return random(0, this.state.quotes.length - 1);
  }

  /**  Returns an integer representing an index in state.quotes
   *  If state.quotes is empty, returns undefined
   */

  generateNewQuoteIndex() {
    this.setState({
      selectedQuoteIndex: this.selectedQuoteIndex(),
    });
  }

  // after data mounted, it's safe to fetch data
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }, this.generateNewQuoteIndex));
  }

  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <div className="App" id="quote-box">
        <QuoteMachine
          selectedQuote={this.selectedQuote}
          generateNewQuoteIndex={this.generateNewQuoteIndex}
        />
      </div>
    );
  }
}

export default App;
