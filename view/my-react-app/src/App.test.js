import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />,<Home />);
  ReactDOM.unmountComponentAtNode(div);
});
