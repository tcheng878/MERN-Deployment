import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product/"/>
        <Detail path="product/:id" />
      </Router>
    </div>
  );
}
export default App;
