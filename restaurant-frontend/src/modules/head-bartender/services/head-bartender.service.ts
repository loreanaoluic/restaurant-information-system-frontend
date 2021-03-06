import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NewRequest } from 'src/modules/app/models/NewRequest';

@Injectable({
  providedIn: 'root'
})
export class HeadBartenderService {
  private headers = new HttpHeaders({ "Content-Type": "application/json"});

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  createRequest(request: NewRequest): void{
    this.http.post<Request>("backend/api/head-bartender/new-request", request, {
      headers: this.headers,
      responseType: "json",
    }).subscribe(() => {
      this.toastr.success("Request created!");
    });
  }
}
