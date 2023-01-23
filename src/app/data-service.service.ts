import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Credential } from "src/models/credential";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  dataViewing: { name: string; email: string; mobileNumber: number }[] = [];
  constructor(private http: HttpClient) {}

  createdCredential(data: Credential) {
    return this.http.post(
      "https://angular-assessment-50503-default-rtdb.asia-southeast1.firebasedatabase.app/credentials.json",
      data
    );
  }
  fetchCredential() {
    return this.http
      .get<{ [key: string]: Credential }>(
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

  //back tick ` if you will inject inside a string
  deleteCredential(id: string) {
    return this.http.delete(
      `https://angular-assessment-50503-default-rtdb.asia-southeast1.firebasedatabase.app/credentials/${id}.json`
    );
  }

  getIndividualCredential(id: string) {
    return this.http.get(
      `https://angular-assessment-50503-default-rtdb.asia-southeast1.firebasedatabase.app/credentials/${id}.json`
    );
  }

  updateCredentials(id:string, data: Credential){
    return this.http.put(
      `https://angular-assessment-50503-default-rtdb.asia-southeast1.firebasedatabase.app/credentials/${id}.json`,
      data);
  }

}
