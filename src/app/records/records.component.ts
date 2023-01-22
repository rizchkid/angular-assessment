import { DataServiceService } from "./../data-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.css"],
})
export class RecordsComponent implements OnInit {
  newTableData: { name: string; email: string; mobileNumber: number }[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.onFetchCredential();
  }

  onDataCreated(data: { name: string; email: string; mobileNumber: number }) {
    this.dataService
      .createdCredential(data)
      .subscribe(() => this.onFetchCredential());
  }

  onDeleteData(id: string){
    // CREATE IF ELSE HERE TO PROMPT IF REALLY SURE TO DELETE THE RERCORD
    this.dataService.deleteCredential(id)
    .subscribe(()=> this.onFetchCredential());
  }

   onFetchCredential() {
    this.dataService.fetchCredential().subscribe((credential) => {
      this.newTableData = credential;
    });
  }


}
