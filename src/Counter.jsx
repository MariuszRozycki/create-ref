import React, { createRef, PureComponent } from 'react';
import './App.css';

class App extends PureComponent {
  state = {
    counter: 0
  }

  componentRef = createRef();

  render() {
    const { counter } = this.state;

    return (
      <div ref={this.componentRef}>
        <p>Wartosc licznik wynosi: {counter}</p>
        <button onClick={this.incriseCounterValue}>Pobierz asynchroniczne dane</button>
      </div>
    )
  }

  incriseCounterValue = () => {
    setTimeout(() => {
      if (this.componentRef.current) {
        this.setState(prevState => ({
          counter: prevState.counter + 1,
        }));
      }
    },
      3000
    );
  }
}

export default App;


