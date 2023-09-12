import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    MenuComponent,
    CalendarComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
