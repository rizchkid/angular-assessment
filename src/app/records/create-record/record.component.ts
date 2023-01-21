import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'records-create-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class CreateRecordComponent {
  @ViewChild('f') addForm: NgForm;
  @Output() inputData = new EventEmitter<{name: string, email: string, mobileNumber: number}>();

  allowedChars = new Set('0123456789'.split('').map((c) => c.charCodeAt(0)));

  name: string;
  email: string;
  mobileNumber: number;

  onSubmit(){
    this.inputData.emit({name: this.name, email: this.email, mobileNumber: this.mobileNumber});
    // console.log(this.addForm);
    this.addForm.reset();

  }

  check(event: KeyboardEvent) {
    // 31 and below are control keys, don't block them.
    if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }
  }


}

