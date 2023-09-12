import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this.router.navigateByUrl('/schedule?id=20230912');
  }
}
