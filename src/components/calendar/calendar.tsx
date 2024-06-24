import './calendar.scss';
import React from 'react';
import moment from 'moment';

const weekDays = moment.weekdays();

interface ResponseGetDays {
    dayMonth: string;
    name: string;
    weekDay: number;
    weekMonth: number;
    currentMonth: boolean;
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
    const daysOfMonth = getDaysInMonth();

    return (
        <div>
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
                    </div>
                ))}
            </div>
        </div>
    );
};

