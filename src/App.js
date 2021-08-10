import React, { createRef, PureComponent } from 'react';
import Counter from './Counter';
import './App.css';

class App extends PureComponent {

  state = {
    isCounterVisible: true,
  }

  textInput = createRef();
  paragraphTextContent = createRef();

  render() {

    const counterElement = this.state.isCounterVisible ? <Counter /> : null;

    console.log(this.textInput);
    return (
      <div>
        <input
          type="text"
          ref={this.textInput}
        />
        <input type="number" />
        <p
          ref={this.paragraphTextContent}
        >Here we will add exclamtion mark
        </p>
        <button onClick={this.focusTextInput}>Ustaw focus na input</button>
        <button onClick={this.handleParagraph}>Add exclamation mark</button>
        <button onClick={this.toggleVisibilityCounter}>Pokaz/Ukryj Counter</button>
        {counterElement}
      </div>
    );
  }

  focusTextInput = () => this.textInput.current.focus();
  handleParagraph = () => this.paragraphTextContent.current.textContent += '!';
  toggleVisibilityCounter = () => this.setState(prevState => ({
    isCounterVisible: !prevState.isCounterVisible,
  }));

}

export default App;


