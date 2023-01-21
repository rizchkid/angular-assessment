import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-record',
  templateUrl: './full-record.component.html',
  styleUrls: ['./full-record.component.css']
})
export class FullRecordComponent implements OnInit{

constructor(private dataService: DataServiceService ){}

display = this.dataService.dataViewing;

ngOnInit(){

}

}
