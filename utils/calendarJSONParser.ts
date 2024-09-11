

interface CalendarEntry {
    eventName: string;  // New field
    startdate: [number, number, number]; // Year, Month, Day
    startTime: [number, number, number]; // Hour, Minute, Second
    endTime: [number, number, number];   // Hour, Minute, Second
}
interface CalendarData {
    entries: CalendarEntry[];
}

import rawData from "../assets/CalendarTestEntries.json";
const data: CalendarData = rawData as CalendarData;

function getCalendarData(): CalendarEntry[] {
    return data.entries;
}