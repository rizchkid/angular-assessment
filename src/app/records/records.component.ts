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
    this.onFetchProduct();
  }

  onDataCreated(data: { name: string; email: string; mobileNumber: number }) {
    this.dataService
      .createdCredential(data)
      .subscribe(() => this.onFetchProduct());
  }

  private onFetchProduct() {
    this.dataService.fetchCredential().subscribe((credential) => {
      this.newTableData = credential;
    });
  }
}
