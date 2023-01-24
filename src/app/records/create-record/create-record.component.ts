import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';
import { Credential } from 'src/app/models/credential';
@Component({
  selector: 'records-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css'],
})
export class CreateRecordComponent implements OnInit {
  @ViewChild('f') addForm: NgForm;
  @Output() inputData = new EventEmitter<Credential>();

  allowedChars = new Set('0123456789'.split('').map((c) => c.charCodeAt(0)));

  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService,
    private router: Router
  ) {}

  name: string;
  email: string;
  mobileNumber: string;
  gender: string;
  buttonLabel: string;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.buttonLabel = params?.recordId ? 'Update ' : 'Add';
      const id = params.recordId;
      this.dataService.getIndividualCredential(id).subscribe((data) => {
        if (data) {
          const { name, email, mobileNumber, gender } = data as Credential;
          this.name = name;
          this.email = email;
          this.mobileNumber = mobileNumber;
          this.gender = gender;
        } else {
          this.name = '';
          this.email = '';
          this.mobileNumber = '';
          this.gender = '';
        }
      });
    });
  }

  onSubmit() {
    this.inputData.emit({
      name: this.name,
      email: this.email,
      mobileNumber: this.mobileNumber,
      gender: this.gender
    });
    this.addForm.reset();
  }

  check(event: KeyboardEvent) {
    // 31 and below are control keys, don't block them.
    if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }
  }
}
