import { Component, Input } from "@angular/core";

@Component({
  selector: "records-record-list",
  templateUrl: "./record-list.component.html",
  styleUrls: ["./record-list.component.css"],
})
export class RecordListComponent {
  @Input() tableData: { name: string; email: string; mobileNumber: number }[] =
    [];

  constructor() {}
}
