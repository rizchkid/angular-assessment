import { Router } from "@angular/router";
import { RecordsComponent } from "../records.component";
// import { DataServiceService } from "./../../data-service.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "records-record-list-table",
  templateUrl: "./records-list-table.component.html",
  styleUrls: ["./records-list-table.component.css"],
})
export class RecordListTableComponent {
  @Input() tableData: { name: string; email: string; mobileNumber: number }[] =
    [];

  constructor(
    private deleteService: RecordsComponent,
    private router: Router
  ) {}

  onDisplay(id: string) {
    // This line of code it to programmatically route to the record detail page with the proper ID
    // template literal $
    this.router.navigate([`/record/${id}`]);
  }

  onDelete(id: string) {
    this.deleteService.onDeleteData(id);
  }
}