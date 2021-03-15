import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponsemodel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ="https://localhost:44382/api/rentals/getrentaldetails"
  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentalResponsemodel>{
    return this.httpClient.get<RentalResponsemodel>(this.apiUrl);

  }
}
