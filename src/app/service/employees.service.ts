import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeesService {
 	
 	private _url: string = "/assets/test-data";

 	constructor(private http:HttpClient) { }

 	getAllEmployees(): Observable<any[]>{
    	return 	this.http.get(this._url + "/employees.json")
    			.catch(this.errorHandler);
	}

	getEmployeeAssessments(empId): Observable<any[]> {
        return 	this.http.get(this._url + "/user-assessment-list.json")
        		.catch(this.errorHandler);
    }

    // utilities
    getPositionList(): Observable<any[]> {
        return 	this.http.get(this._url + "/employee-position.json")
        		.catch(this.errorHandler);
    }

	errorHandler(error: HttpErrorResponse){
	return Observable.throw(error.message || "Server Error");
	}

}
