import './calendar.scss';
import React from 'react';

export const MyCalender = () => {


    return (
        <div className="flex-container pt-3">
            <div className="label-day">
                    <span className="span-weekend-day">
                        1
                    </span>
            </div>
            <div className="label-day">
                    <span className="span-weekend-day">
                        2
                    </span>
            </div>
            <div className="label-day">
                <span className="span-weekend-day">
                    3
                </span>
            </div>
            <div className="label-day">
                <span className="span-weekend-day">
                    4
                </span>
            </div>
            <div className="label-day">
                <span className="span-weekend-day">
                    5
                </span>
            </div>
            <div className="label-day">
                <span className="span-weekend-day">
                    6
                </span>
        </div>

        <div className="flex-container">
            <div className='box-day'>
                <span className="span-weekend-day">
                7
            </span>
                <span className="span-week-day">
                7
            </span>
                <span className="span-not-current-month">
                7
            </span>

            </div>


        </div>

        </div>


    );
};