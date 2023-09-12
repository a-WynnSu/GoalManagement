import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [{
  path:'',component:MainComponent
},
{
  path:'calendar', component: CalendarComponent
},
{
  path:'schedule', component: ScheduleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
