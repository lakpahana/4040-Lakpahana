import { Component } from '@angular/core';
import { booking, bookingStatus } from './dashboard.types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Ground Booking';
  mockData: booking[] = [
    {
      id: 1,
      name: 'John Doe',
      phone: '1234567890',
      date: new Date('2021-08-01'),
      status: bookingStatus.pending
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '1234567890',
      date: new Date('2021-08-02'),
      status: bookingStatus.confirmed
    },
    {
      id: 3,
      name: 'James Doe',
      phone: '1234567890',
      date: new Date('2021-08-03'),
      status: bookingStatus.paid
    },
    {
      id: 4,
      name: 'Jill Doe',
      phone: '1234567890',
      date: new Date('2021-08-04'),
      status: bookingStatus.cancelled
    }
  ];

  displayedColumns: string[] = ['id', 'name', 'phone', 'date', 'status'];
  dataSource = this.mockData;
  constructor() {
  }


}
