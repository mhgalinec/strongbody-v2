import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
 
  private baseUrl = 'http://localhost:8080/strongbody-v2.0/src/member';

  constructor(private http: HttpClient) { }

  getMemberList(): Observable<any>{
    
    return this.http.get(`${this.baseUrl}/list`);
  }

  deleteMember(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  createMember(member: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, member);
  }

  updateMember(id:number, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getMember(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
