import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import AutoScroller from '@fullcalendar/interaction/dnd/AutoScroller';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar', { static: false }) fullcalendar: FullCalendarComponent;
  ngOnInit() {
    this.options = {
      editable: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      minTime : "08:30",
      maxTime : "18:30",
      slotDuration : "02:00",
      allDaySlot : false,
      slotLabelFormat : {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        meridiem: false
      },
      columnHeaderFormat : {
        weekday: 'short'
      },
      contentHeight: 'auto',
      plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin]
    };
  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateHeader() {
    this.options.header = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
}