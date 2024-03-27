import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css'

const DateTimeRangeFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleFilter = () => {
    // Handle filtering logic using startDate and endDate
    console.log('Filtered data:', startDate, endDate);
  };

  return (
    
    <div className='bg-date'>
      <div>
        <label>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={5}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default DateTimeRangeFilter;
