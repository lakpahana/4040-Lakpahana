import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarMonthViewBeforeRenderEvent, CalendarMonthViewDay } from 'angular-calendar';
import { Subject } from 'rxjs';
// import { colors } from '../demo-utils/colors';
const RED_CELL: 'red-cell' = 'red-cell';
const BLUE_CELL: 'blue-cell' = 'blue-cell';
@Component({
  selector: 'app-book',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']

})
export class BookComponent {
  bookAppointment() {
    throw new Error('Method not implemented.');
  }
  refresh = new Subject<void>();

  cssClass: string = 'booked-cell';
  selectedDate: any;
  @Input() name: string = 'month';
  @Input() phone: string = 'month';




  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      //random 5 days are booked  && day.inMonth
      if (this.events.filter((event) => { 
        return event.start.getDate() === day.date.getDate() 
        && event.start.getMonth() === day.date.getMonth() 
        && event.start.getFullYear() === day.date.getFullYear() }).length > 0
        && day.inMonth) {
        day.cssClass = this.cssClass;
      }

    });
  }
  colors = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'An event',
      color: this.colors.red,
    },
  ];

  handleEvent(arg0: any) {
    this.selectedDate = arg0.day.date;
    console.log(this.selectedDate);
  }

}
