<template>
    <v-sheet>
      <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        label="View Mode"
        variant="outlined"
        dense
        hide-details
      ></v-select>
       <v-calendar
       ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
       >
       
       <template #event="{ event }">
           <v-card color="Blue">
             <strong>{{ event.title }}</strong> <br>
             {{ formatTime(event.start as Date) }} - {{ formatTime(event.end as Date) }}
             
           </v-card>
          
         </template>
       </v-calendar>
   </v-sheet>
   </template>
   
   <script lang="ts" setup>
   import { ref } from 'vue';
   import {getCalendarData} from "../utils/calendarJSONParser"
   const dates = getCalendarData();
   const type = ref("day")
   const types= ["month", "week", "day"]
   
   console.log(dates);
   const value = [new Date()]
   const weekday:number[] = [1,2,3,4,5,6,0];
   const day = Date.now()
   const events = ref<Object[]>([]);
   for (let i:number = 0; i < dates.length;i++){
       let date = dates[i].startdate;
       let startDate = dates[i].startTime;
       let endDate = dates[i].endTime;
       let start = new Date(date[2], date[1], date[0], startDate[0], startDate[1],startDate[2])
       let end = new Date(date[2], date[1], date[0], endDate[0], endDate[1], endDate[2])
       events.value.push({
           title: dates[i].eventName,
           start: start, 
           end: end  // Event spanning today and tomorrow
   
   });
   }
   function formatTime(date: Date) {
         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
       }
   
   
   </script>