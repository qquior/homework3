
import React, {Component} from "react";
import Counter from './components/Counter';

class App extends Component {
  render() {
    return(
      <div>
        <Counter value={10} />
      </div>
    );
  }
}

export default App;