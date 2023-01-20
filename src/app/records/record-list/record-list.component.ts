import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'records-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
@Input() tableData: {name: string, email: string, mobileNumber: number}[]=[];

newTableData: {name: string, email: string, mobileNumber: number}[]=[];


ngOnInit(){
    this.newTableData= this.tableData;
  }
}
