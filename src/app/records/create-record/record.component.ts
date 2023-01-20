import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'records-create-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class CreateRecordComponent {
  @ViewChild('f') addForm: NgForm;
  name: string;
  email: string;
  mobileNumber: number;


  @Output() inputData = new EventEmitter<{name: string, email: string, mobileNumber: number}>();

  onSubmit(){
  this.inputData.emit({name: this.name, email: this.email, mobileNumber: this.mobileNumber});
  console.log(this.addForm);

  this.addForm.reset();
  }

}
