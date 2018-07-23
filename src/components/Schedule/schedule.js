import React, { Component } from 'react';

import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    render() {
        return (
            <div className="schedule">
                <h1 className="schedule__title">Course Schedule</h1>
                <ScheduleCourse title={'Problems Solving'}/>
                <ScheduleCourse title={'Problems Solving'}/>
                <ScheduleCourse title={'Problems Solving'}/>
                <ProgressTracker />
                <Gradient/>
            </div>
        );
    }
}

export default Schedule;