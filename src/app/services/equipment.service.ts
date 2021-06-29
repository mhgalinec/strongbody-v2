import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
	
  private baseUrl = 'http://localhost:8080/strongbody-v2.0/src/equipment';

  constructor(private http:HttpClient) { }


  getEquipment(id:number):Observable<any>{
	return this.http.get(`${this.baseUrl}/${id}`)
  }

  getEquipmentList():Observable<any>{
	return this.http.get(`${this.baseUrl}/list`);
  }

  createEquipment(equipment: Object): Observable<any>{
	return this.http.post(`${this.baseUrl}`, equipment);
  }

  updateEquipment(id:number, value:any): Observable<any>{
	return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteEquipment(id:number):Observable<any>{
	return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'})
  }
}
