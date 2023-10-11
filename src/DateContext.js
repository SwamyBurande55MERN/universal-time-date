import React, { createContext, useState } from 'react';
// creating a new Context (DateContext) using the createContext() method.
const DateContext = createContext();

const DateProvider = (props) => {
      const [selectedTimezone, setSelectedTimezone] = useState('IST');

      return (
            <DateContext.Provider value={{ selectedTimezone, setSelectedTimezone }}>
                  {props.children}
            </DateContext.Provider>
      );
};

export { DateContext, DateProvider };
