import { DataServiceService } from './../data-service.service';
import { Component, } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private dataService: DataServiceService){}
}
