<template>
  <VCalendar
    ref="calendar"
    :events="events"
    :view_mode="type"
    :weekdays="weekday"
  >
    <template #event="{ event }">
      <v-card>
        <strong>{{ event.title }}</strong> <br />
        {{ formatTime(event.start as Date) }} -
        {{ formatTime(event.end as Date) }}
      </v-card>
    </template>
  </VCalendar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getCalendarData } from "../utils/calendarJSONParser";
const dates = getCalendarData();
const type = "month";
const types = ["month", "week", "day"];

console.log(dates);
const weekday: number[] = [1, 2, 3, 4, 5, 6, 0];
const day = Date.now();
const events = ref<object[]>([]);
for (let i: number = 0; i < dates.length; i++) {
  const date = dates[i].startdate;
  const startDate = dates[i].startTime;
  const endDate = dates[i].endTime;
  const start = new Date(
    date[2],
    date[1],
    date[0],
    startDate[0],
    startDate[1],
    startDate[2],
  );
  const end = new Date(
    date[2],
    date[1],
    date[0],
    endDate[0],
    endDate[1],
    endDate[2],
  );
  events.value.push({
    title: dates[i].eventName,
    start: start,
    end: end, // Event spanning today and tomorrow
  });
}
function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
</script>
