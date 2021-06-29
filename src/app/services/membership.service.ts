import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private baseUrl = 'http://localhost:8080/strongbody-v2.0/src/membership';

  constructor(private http: HttpClient) { }


  updateMembership(id: number, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  //Get membership through foreign key(memberID)
  getMembership(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  //Get membership through membership id
  getMembershipForUpdate(id:number): Observable<any>{
	return this.http.get(`${this.baseUrl}/update/${id}`);
  }

  getMembershipList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  createMembership(id:number,membership: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${id}`, membership);
  }

  deleteMembership(id:number):Observable<any>{
	return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

