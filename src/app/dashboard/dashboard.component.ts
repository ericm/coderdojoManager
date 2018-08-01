import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  add = 0;
  startDate = moment().startOf('week').add(0,'weeks').format('MMMM Do YYYY');
  endDate = moment().endOf('week').add(0,'weeks').format('MMMM Do YYYY');

  weekTemplate = "This week";
  goNext() {
    this.add++;
    this.startDate = moment().startOf('week').add(this.add,'weeks').format('MMMM Do YYYY');
    this.endDate = moment().endOf('week').add(this.add,'weeks').format('MMMM Do YYYY');
    console.log(this.add);
  }
  goLast() {
    this.add--;
    this.startDate = moment().startOf('week').add(this.add,'weeks').format('MMMM Do YYYY');
    this.endDate = moment().endOf('week').add(this.add,'weeks').format('MMMM Do YYYY');
    console.log(this.add);
  }


}
