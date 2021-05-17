import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  private baseUrl= 'http://localhost:8080/strongbody-v2.0/src/measurements'

  constructor(private http:HttpClient) { }

    //Returns all measurements that a member has(as an array)
    getMeasurements(id: number): Observable<any>{
	  return this.http.get(`${this.baseUrl}/${id}`);
	}
	
	//Returns a single measurement object(used in updateMeasurement)
	getMeasurementForUpdate(id:number): Observable<any>{
		return this.http.get(`http://localhost:8080/strongbody-v2.0/src/measurementUpdate/${id}`)
	}
	
	createMeasurement(id:number,measurements:any): Observable<any>{
		return this.http.post(`${this.baseUrl}/${id}`, measurements);
	}
	
	updateMeasurement(id: number, value: any): Observable<Object>{
    	return this.http.put(`${this.baseUrl}/${id}`, value);
    }

	deleteMeasurement(id:number):Observable<any>{
		return this.http.delete(`${this.baseUrl}/${id}`);
    }

}
