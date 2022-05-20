import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'

function App() {
    return (
      <DataProvider>
        <Router>
          <div>
            
          </div>
        </Router>
      </DataProvider>
    );
  }
  
  export default App;