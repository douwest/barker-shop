import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { OptionsInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  options: OptionsInput;
  eventsModel: any;
  events : [];
  @ViewChild('fullcalendar', { static: true }) fullcalendar: FullCalendarComponent;
  ngOnInit() {
    this.options = {
      plugins: [timeGridPlugin, interactionPlugin],
      defaultView: 'timeGridWeek',
      editable: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      minTime: "08:30",
      maxTime: "18:30",
      slotDuration: "02:00",
      allDaySlot: false,
      slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        meridiem: false
      },
      columnHeaderFormat: {
        weekday: 'short'
      },
      eventBackgroundColor: 'red',
      eventClassName:'event'
    };
  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }

  dateClick(model) {
    
    var startDate : Date = model.date;
    var endDate : Date = new Date(model.date);
    endDate.setHours(startDate.getHours() + 2);
    console.log(startDate.toTimeString() + ', ' + endDate.toTimeString())
    this.eventsModel = [{
      title: 'Get yo dog a haircut bruh',
      start: startDate,
      end: endDate
    }];

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