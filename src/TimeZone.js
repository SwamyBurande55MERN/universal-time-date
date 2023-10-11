import React, { useContext } from 'react';
import moment from 'moment-timezone';
import { DateContext } from './DateContext'; // Import the context created in DateContext.js file

function TimeZone() {
      const { selectedTimezone, setSelectedTimezone } = useContext(DateContext);

      const handleChangeTimezone = (event) => {
            setSelectedTimezone(event.target.value);
      };
      {/*creating a string (currentTime) that represents the current date and time in the selected timezone in a descriptive, human-readable format 

       "LLLL" => Represents the complete date and time, including the day of the week, the month's full name, the day of the month, the year, and the time.

       "tz" => timeZone() 
      */}
      const currentTime = moment().tz(selectedTimezone).format('LLLL');


      return (
            <div className="mainContainer">
                  <h1>Universal Time & Date</h1>
                  <div className="gray">
                        <label><b>Select timeZone</b> : </label>
                        <select onChange={handleChangeTimezone} value={selectedTimezone} style={{ cursor: "pointer" }}>
                              {/* Major 30 time zones across Universally */}
                              <option value="Asia/Kolkata">Asia-Kolkata, India Standard Time (IST) - UTC+5:30</option>
                              <option value="America/New_York">America-New_York, Eastern Standard Time (EST) - UTC-5</option>
                              <option value="America/Chicago">America-Chicago, Central Standard Time (CST) - UTC-6</option>
                              <option value="America/Denver">America-Denver, Mountain Standard Time (MST) - UTC-7</option>
                              <option value="America/Los_Angeles">America-Los_Angeles, Pacific Standard Time (PST) - UTC-8</option>
                              <option value="America/Anchorage">America-Anchorage, Alaska Standard Time (AKST) - UTC-9</option>
                              <option value="America/Sao_Paulo">America-Sao_Paulo, Brasília Time (BRT) - UTC-3</option>
                              <option value="America/Buenos_Aires">America-Buenos_Aires, Argentina Time (ART) - UTC-3</option>
                              <option value="America/Santiago">America-Santiago, Chile Standard Time (CLT) - UTC-4</option>
                              <option value="America/Caracas">America-Caracas, Venezuela Time (VET) - UTC-4</option>
                              <option value="America/Puerto_Rico">America-Puerto_Rico, Atlantic Standard Time (AST) - UTC-4</option>
                              <option value="Europe/London">Europe-London, Greenwich Mean Time (GMT) - UTC+0</option>
                              <option value="Europe/Paris">Europe-Paris, Central European Time (CET) - UTC+1</option>
                              <option value="Europe/Athens">Europe-Athens, Eastern European Time (EET) - UTC+2</option>
                              <option value="Europe/Lisbon">Europe-Lisbon, Western European Time (WET) - UTC+0</option>
                              <option value="Europe/London">Europe-London, British Summer Time (BST) - UTC+1</option>
                              <option value="Africa/Lagos">Africa-Lagos, West Africa Time (WAT) - UTC+1</option>
                              <option value="Africa/Johannesburg">Africa-Johannesburg, Central Africa Time (CAT) - UTC+2</option>
                              <option value="Africa/Nairobi">Africa-Nairobi, East Africa Time (EAT) - UTC+3</option>
                              <option value="Africa/Johannesburg">Africa-Johannesburg, South Africa Standard Time (SAST) - UTC+2</option>
                              <option value="Indian/Mauritius">Indian-Mauritius, Mauritius Standard Time (MST) - UTC+4</option>
                              <option value="Asia/Shanghai">Asia-Shanghai, China Standard Time (CST) - UTC+8</option>
                              <option value="Asia/Tokyo">Asia-Tokyo, Japan Standard Time (JST) - UTC+9</option>
                              <option value="Asia/Riyadh">Asia-Riyadh, Arabian Standard Time (AST) - UTC+3</option>
                              <option value="Europe/Moscow">Europe-Moscow, Moscow Standard Time (MSK) - UTC+3</option>
                              <option value="Australia/Sydney">Australia-Sydney, Australian Eastern Standard Time (AEST) - UTC+10</option>
                              <option value="Australia/Darwin">Australia-Darwin, Australian Central Standard Time (ACST) - UTC+9:30</option>
                              <option value="Australia/Perth">Australia-Perth, Australian Western Standard Time (AWST) - UTC+8</option>
                              <option value="Australia/Lord_Howe">Australia-Lord_Howe, Lord Howe Standard Time (LHST) - UTC+10:30</option>
                              <option value="Pacific/Norfolk">Pacific-Norfolk, Norfolk Island Time (NFT) - UTC+11:30</option>

                        </select>
                  </div>
                  <div>
                        <p>Current Day/Date/Time in <b>{selectedTimezone}</b> : <b> {currentTime} </b></p>

                  </div>
            </div>
      );
}

export default TimeZone;


