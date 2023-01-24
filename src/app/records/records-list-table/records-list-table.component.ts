import { Credential } from 'src/app/models/credential';
import { DataServiceService } from 'src/app/data-service.service';

import { Router, ActivatedRoute } from '@angular/router';
import { RecordsComponent } from '../records.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'records-record-list-table',
  templateUrl: './records-list-table.component.html',
  styleUrls: ['./records-list-table.component.css'],
})
export class RecordListTableComponent implements OnInit {
  @Input() tableData: Credential[] = [];

  editMode: boolean;
  updateBtnLabel: string;

  constructor(
    private parent: RecordsComponent,
    private router: Router,
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.editMode = params.editMode ? true : false;
      this.updateBtnLabel = this.editMode ? 'Cancel' : 'Update';
    });
  }

  onDisplay(id: string) {
    // This line of code it to programmatically route to the record detail page with the proper ID
    // template literal $
    this.router.navigate([`/record/${id}`]);
  }

  onDelete(id: string) {
    this.parent.onDeleteData(id);
    this.router.navigate([], {
      queryParams: {},
    });
  }

  onUpdate(id: string) {
    if (this.route.snapshot.queryParams?.editMode)
      this.router.navigate([], {
        queryParams: {},
      });
    else this.parent.onUpdateData(id);
  }
}
