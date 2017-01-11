import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeServices {
    private apiUrl = "http://58743f2a72dc1c1200971184.mockapi.io/api/employee";

    constructor(private _http: Http) {

    }
    //Lấy toàn bộ danh sách
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json());
    }
    //Search
    Search(keyword: string): Observable<any[]> {
        return this._http.get(this.apiUrl + "?search=" + keyword).map((response: Response) => response.json());
    }
    //Lấy theo ID
    GetSingle(id: number): Observable<any> {
        return this._http.get(`${this.apiUrl}/${id}`).map((response: Response) => response.json());
    }
    //Update theo ID, data: truyen ca mang data vao
    Update(id: number, data: any): Observable<any> {
        return this._http.put(`${this.apiUrl}/${id}`, data).map((response: Response) => response.json());
    }
    //Add
    Add(data: any): Observable<any> {
        return this._http.post(this.apiUrl, data).map((response: Response) => response.json());
    }
    //Delete
    Delete(id: number): Observable<any> {
        return this._http.delete(`${this.apiUrl}/${id}`).map((response: Response) => response.json());
    }
}