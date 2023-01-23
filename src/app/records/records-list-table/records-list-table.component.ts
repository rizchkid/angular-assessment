
import { Router } from "@angular/router";
import { RecordsComponent } from "../records.component";
import { Component, Input} from "@angular/core";
import { Credential } from "src/models/credential";

@Component({
  selector: "records-record-list-table",
  templateUrl: "./records-list-table.component.html",
  styleUrls: ["./records-list-table.component.css"],
})
export class RecordListTableComponent {
  @Input() tableData: Credential[] = [];

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
    this.router.navigate([], {
      queryParams: {},
    });
  }

  onUpdate(id: string) {
    this.router.navigate([], {
      queryParams: {
        recordId: id,
        editMode: true,
      },
    });
  }
}
