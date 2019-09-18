import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  render() {
    return <div />;
  }
}

class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  render() {
    return (
    <div>
      {this.state.text}
    </div>  
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
