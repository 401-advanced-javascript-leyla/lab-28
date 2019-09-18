import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message.js';

import './styles.css';

class App extends React.Component {
  render() {
    return <Message />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
