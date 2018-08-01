import {Component} from '@angular/core';
import * as moment from 'moment';

import * as Nano  from 'nano'
/*
let db = Nano('http://127.0.0.1:5984/calendar').db.;

interface Entry extends Nano.MaybeDocument {
  date: string,
  entry: string
}

class Person implements Entry {
  _id: string;
  _rev: string;
  date: string;
  entry: string;

  constructor(date: string, entry: string) {
    this._id = undefined;
    this._rev = undefined;
    this.date = date;
    this.entry = entry
  }

  processAPIResponse(response: Nano.DocumentInsertResponse) {
    if (response.ok === true) {
      this._id = response.id;
      this._rev = response.rev
    }
  }
}
let enter = new Person('02/08/2018', 'meeting');
db.use("calendar").insert(enter).then((response) => {
  enter.processAPIResponse(response);
  console.log(enter);
});
*/


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
          this.weekTemplate = this.add*-1 + " week ago"
        } else {
          this.weekTemplate = this.add + " week from now"
        }
      } else {
        if (this.add < 0) {
          this.weekTemplate = this.add*-1 + " weeks ago"
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
          this.weekTemplate = this.add + " week from now"
        }
      } else {
        if (this.add < 0) {
          this.weekTemplate = this.add*-1 + " weeks ago"
        } else {
          this.weekTemplate = this.add + " weeks from now"
        }
      }
    }
  }


}
