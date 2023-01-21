import { Component } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  inputStorage: {name:string, email: string, mobileNumber: number}[] = [];

  onDataCreated(data: {name:string, email: string, mobileNumber: number}){
    this.inputStorage.push(data);
    // console.log(data);
  }
}
