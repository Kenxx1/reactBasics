import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("Called once when App component is created");
  }

  // Called after component is rendered in DOM, often Ajax calls used to get data from server
  componentDidMount() {
    console.log("App mounted");
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter.value++;
    counters[index] = counter;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      //1 line return doesn't work here? c => c.value = 0
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
