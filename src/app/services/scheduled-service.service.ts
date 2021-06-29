import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledServiceService {

  private baseUrl = 'http://localhost:8080/strongbody-v2.0/src/service/scheduled';

  constructor(private http:HttpClient) { }

  getScheduledService(id:number):Observable<any>{
	return this.http.get(`${this.baseUrl}/${id}`);
  }

  getScheduledServiceForUpdate(id:number):Observable<any>{
	return this.http.get(`${this.baseUrl}/update/${id}`);
  }

  createScheduledService(id:number,service:any):Observable<any>{
	return this.http.post(`${this.baseUrl}/${id}`,service);
  }

  updateScheduledService(id:number,value:any):Observable<any>{
	return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteScheduledService(id:number):Observable<any>{
	return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
