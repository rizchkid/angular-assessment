import { DataServiceService } from './../data-service.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  inputStorage: {name:string, email: string, mobileNumber: number}[] = [];

  constructor(private dataService: DataServiceService){}

  onDataCreated(data: {name:string, email: string, mobileNumber: number}){
    this.inputStorage.push(data);
    this.dataService.createdCredential(data);
    // console.log(data);
  }
}
