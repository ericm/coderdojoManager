import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    ManageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
