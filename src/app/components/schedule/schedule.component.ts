import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id:String|null='';
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
  }

}
