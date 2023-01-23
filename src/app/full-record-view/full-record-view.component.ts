import { DataServiceService } from "../data-service.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Credential } from "../../models/credential";

@Component({
  selector: "app-full-record-view",
  templateUrl: "./full-record-view.component.html",
  styleUrls: ["./full-record-view.component.css"],
})
export class FullRecordViewComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  displayData: Credential = {
    name: "",
    email: "",
    mobileNumber: "",
    gender: ""
  };

  ngOnInit() {
    //OBJECT DESTRUCTURING
    // This line will destructure every data from route params, in this case { id } was destructured from route
    const { id } = this.route.snapshot.params;
    // This will fetch the credential that you're trying to access or view
    this.dataService.getIndividualCredential(id).subscribe((data) => {
      this.displayData = data as Credential;
    });
  }
}
