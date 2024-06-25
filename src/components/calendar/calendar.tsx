

import './calendar.scss';
import React, {useState} from 'react';
import moment from 'moment';
import '../../assets/styles/global.scss';


const weekDays = moment.weekdays();

interface ResponseGetDays {
    dayMonth: string;
    name: string;
    weekDay: number;
    weekMonth: number;
    currentMonth: boolean;
    reminder?: string;
    reminderTime?: string;
    city?: string;
}

const getDaysInMonth = (): ResponseGetDays[] => {
    const currentMonth = moment().month();
    const currentYear = moment().year();
    const daysInMonth = moment().daysInMonth();
    const daysOfMonth = [];

    for (let i = 1; i <= daysInMonth; i++) {
        const day = moment().month(currentMonth).year(currentYear).date(i);

        if(i === 1 && day.day() !== 0) {
            const daysToSubtract = day.day();
            const referenceDate = moment(day).subtract(daysToSubtract, 'days');

            for (let x = 0; x < daysToSubtract; x++) {
                const date = moment(referenceDate).add(x, 'days');
                daysOfMonth.push({
                    dayMonth: date.format('D'),
                    name: date.format('dddd'),
                    weekDay: date.day(),
                    weekMonth: date.week(),
                    currentMonth: false,
                });
            }
        }

        daysOfMonth.push({
            dayMonth: day.format('D'),
            name: day.format('dddd'),
            weekDay: day.day(),
            weekMonth: day.week(),
            currentMonth: true,
        });

        if(i === daysInMonth && day.day() !== 6) {
            const daysToAdd = 6 - day.day();
            for (let x = 1; x <= daysToAdd; x++) {
                const date = moment(day).add(x, 'days');
                daysOfMonth.push({
                    dayMonth: date.format('D'),
                    name: date.format('dddd'),
                    weekDay: date.day(),
                    weekMonth: date.week(),
                    currentMonth: false,
                });
            }
        }
    }

    return daysOfMonth;
};
export const MyCalendar = () => {
    const [reminder, setReminder] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [city, setCity] = useState('');
    const [daysOfMonth, setDaysOfMonth] = useState(getDaysInMonth());

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newDaysOfMonth = daysOfMonth.map(day => {
            if (day.dayMonth === date) {
                return { ...day, reminder, reminderTime: time, city };
            }
            return day;
        });
        setDaysOfMonth(newDaysOfMonth);
        setReminder('');
        setDate('');
        setTime('');
        setCity('');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="form-container">
                <input type="text" className="input" value={reminder} onChange={e => setReminder(e.target.value)} placeholder="Reminder" maxLength={30} required />
                <input type="date" className="input" value={date} onChange={e => setDate(e.target.value)} required />
                <input type="time" className="input" value={time} onChange={e => setTime(e.target.value)} required />
                <input type="text" className="input" value={city} onChange={e => setCity(e.target.value)} placeholder="City" required />
                <button type="submit" className="button-primary">Add Reminder</button>
            </form>
            <div className="flex-container pt-3">
                {weekDays.map((day, index) => (
                    <div key={index} className="label-day">
                        <span>{day}</span>
                    </div>
                ))}
            </div>
            <div className="flex-container pt-3">
                {daysOfMonth.map((day, index) => (
                    <div key={index} className="label-day">
                    <span className={day.currentMonth ? "span-weekend-day" : "span-not-current-month"}>
                        {day.dayMonth}
                    </span>
                        {day.reminder && <div>{day.reminder} at {day.reminderTime} in {day.city}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};