import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'records-create-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class CreateRecordComponent {
  name: string;
  email: string;
  mobileNumber: number;

  @Output() inputData = new EventEmitter<{name: string, email: string, mobileNumber: number}>();

  onSubmit(){
  this.inputData.emit({name: this.name, email: this.email, mobileNumber: this.mobileNumber});
  }
}
