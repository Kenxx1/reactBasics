import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // Destructuring props
    const { onReset, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-small m-2">
          Reset
        </button>
        {counters.map(item => (
          <Counter
            key={item.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
