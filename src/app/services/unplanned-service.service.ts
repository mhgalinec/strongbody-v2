import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnplannedServiceService {
	
  private baseUrl = 'http://localhost:8080/strongbody-v2.0/src/service/unplanned';

  constructor(private http:HttpClient) { }

  getUnplannedService(id:number):Observable<any>{
	return this.http.get(`${this.baseUrl}/${id}`);
  }

  getUnplannedServiceForUpdate(id:number):Observable<any>{
	return this.http.get(`${this.baseUrl}/update/${id}`);
  }
 
  createUnplannedService(id:number,service:any):Observable<any>{
	return this.http.post(`${this.baseUrl}/${id}`,service);
  }

  updateUnplannedService(id:number,value:any):Observable<any>{
	return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteUnplannedService(id:number):Observable<any>{
	return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
