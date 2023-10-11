// App.js
import React from 'react';
import './App.css';
import TimeZone from './TimeZone.js';
import { DateProvider } from './DateContext.js';

function App() {
  return (
    <div className="App">
      {/*Wrapping the TimeZone (component to be displayed on the UI) inside the DateProvider component */}
      <DateProvider>
        <TimeZone />
      </DateProvider>
    </div>
  );
}

export default App;
