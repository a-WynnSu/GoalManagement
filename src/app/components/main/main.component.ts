import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  goalInput: String = '';
  startDate: any = '';
  finishDate: any = '';
  result: any = {};
  days: any = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const url = 'http://localhost:8080/customer/1234567890123';
    //const url ='/indicesReport/TAI50I';
    // this.result = this.http.get(url).subscribe((res: any) => {
    //   this.result = res;
    // });
  }

  toDays() {
    if (!this.startDate || !this.finishDate) {
      return;
    }
    if (this.finishDate - this.startDate < 0) {
      alert('結束時間需晚於開始時間');
      return;
    }
    this.days = this.finishDate.getTime() - this.startDate.getTime();
  }
}
