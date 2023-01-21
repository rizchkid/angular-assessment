import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {

  dataViewing: {name: string, email: string, mobileNumber: number}[]=[]
  constructor(private http: HttpClient) {}

  createdCredential(data: {
    name: string;
    email: string;
    mobileNumber: number;
  }) {
    return this.http.post(
      "https://angular-assessment-50503-default-rtdb.asia-southeast1.firebasedatabase.app/credentials.json",
      data
    );
  }
  fetchCredential() {
    return this.http
      .get<{ [key: string]: { name: string; email: string; contact: number } }>(
        "https://angular-assessment-50503-default-rtdb.asia-southeast1.firebasedatabase.app/credentials.json"
      )
      .pipe(
        map((res) => {
          const credential = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              credential.push({ ...res[key], id: key });
            }
          }
          return credential;
        })
      );
  }
    deleteCredential(id: string){
      this.http.delete("https://angular-assessment-50503-default-rtdb.asia-southeast1.firebasedatabase.app/credentials/"+id+'.json')
      .subscribe();
    }
    clearViewFullRecord(){
      this.dataViewing.splice(0,1);
    }
}
