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
    if (this.add == 0) {
      this.weekTemplate = "This week"
    } else {
      if (this.add == 1 || this.add == -1) {
        if (this.add < 0) {
          this.weekTemplate = this.add*-1 + " week from now"
        } else {
          this.weekTemplate = this.add + " week from now"
        }
      } else {
        if (this.add < 0) {
          this.weekTemplate = this.add*-1 + " weeks from now"
        } else {
          this.weekTemplate = this.add + " weeks from now"
        }
      }

    }
  }
  goLast() {
    this.add--;
    this.startDate = moment().startOf('week').add(this.add,'weeks').format('MMMM Do YYYY');
    this.endDate = moment().endOf('week').add(this.add,'weeks').format('MMMM Do YYYY');
    if (this.add == 0) {
      this.weekTemplate = "This week"
    } else {
      if (this.add == 1 || this.add == -1) {
        if (this.add < 0) {
          this.weekTemplate = this.add*-1 + " week ago"
        } else {
          this.weekTemplate = this.add + " week ago"
        }
      } else {
        if (this.add < 0) {
          this.weekTemplate = this.add*-1 + " weeks ago"
        } else {
          this.weekTemplate = this.add + " weeks ago"
        }
      }
    }
  }


}
