import { Router } from '@angular/router';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Credential } from 'src/models/credential';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  newTableData: { name: string; email: string; mobileNumber: number }[] = [];
  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.onFetchCredential();
  }

  onDataCreated(data: Credential) {
    if (!this.route.snapshot.queryParams.editMode) {
      this.dataService
        .createdCredential(data)
        .subscribe(() => this.onFetchCredential());
      return;
    }
    const id = this.route.snapshot.queryParams.recordId;
    this.dataService.updateCredentials(id, data).subscribe(() => {
      this.onFetchCredential();
      this.router.navigate([], {
        queryParams: {},
      });
    });
  }

  onDeleteData(id: string) {
    // CREATE IF ELSE HERE TO PROMPT IF REALLY SURE TO DELETE THE RECORD
    this.dataService
      .deleteCredential(id)
      .subscribe(() => this.onFetchCredential());
  }

  onFetchCredential() {
    this.dataService.fetchCredential().subscribe((credential) => {
      this.newTableData = credential;
    });
  }
}
