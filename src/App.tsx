import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes/index';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
      <Routes />
    <GlobalStyle />
  </Router>
)

export default App;
