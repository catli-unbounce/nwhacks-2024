
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());
 
    return (
        <div>
            <h1>What are you looking for?</h1>
            <p>I need a...</p>
            
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}