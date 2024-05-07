import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

//  add time zone support
import 'moment-timezone';
moment.tz.setDefault('America/Chicago');

// Setup the localizer by providing the moment Object
// to the correct localizer.
const localizer = momentLocalizer(moment);

const HuntsCalendar = () => {
    const hunts = [
        {
            start: "2024-05-13",
            end: "2024-05-16",
            title: "Booked",
        },
    ];

    return (
        <Calendar
            id="huntCal"
            localizer={localizer}
            events={hunts}
            startAccessor="start"
            endAccessor="end"
        />
    );
};

export default HuntsCalendar
