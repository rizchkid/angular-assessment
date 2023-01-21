import { RecordsComponent } from './../records.component';
import { DataServiceService } from './../../data-service.service';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "records-record-list",
  templateUrl: "./record-list.component.html",
  styleUrls: ["./record-list.component.css"],
})
export class RecordListComponent {
  @Input() tableData: { name: string; email: string; mobileNumber: number }[] =
    [];

  constructor(private dataService: DataServiceService,
              private deleteService: RecordsComponent) {}


  onDisplay(displayData: { name: string; email: string; mobileNumber: number }){
    this.dataService.dataViewing.splice(0,1);
    this.dataService.dataViewing.push(displayData);
  }

  onDelete(id: string){
    // CREATE IF ELSE HERE TO PROMPT IF REALLY SURE TO DELETE THE RERCORD
    this.dataService.deleteCredential(id);

  }

}
