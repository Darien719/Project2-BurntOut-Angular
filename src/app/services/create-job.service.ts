import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateJobService {
  
  private url = "http://localhost:9025/users/login";

  constructor(private httpCli: HttpClient) { }
}
