import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NewRequest } from 'src/modules/app/models/NewRequest';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  private headers = new HttpHeaders({ "Content-Type": "application/json"});

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  createRequest(request: NewRequest): void{
    this.http.post<Request>("backend/api/chef/new-request", request, {
      headers: this.headers,
      responseType: "json",
    }).subscribe(response => {
      this.toastr.success("Request created!");
    });
  }
}
