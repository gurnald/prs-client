import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Request } from './request.class'

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    baseurl: string = "http://localhost:4363/api/users";
    constructor(
        private http: HttpClient
    ) {}

    reviews(userId: number): Observable<Request[]> {
        return this.http.get(`${this.baseurl}/${userId}`) as Observable<Request[]>;
    }

    list(): Observable<Request[]> {
        return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
    }

    get(id: number): Observable<Request> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
    }
    create(request: Request): Observable<Request> {
        return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
    }

    review(request: Request): Observable<any> {
        return this.http.put(`${this.baseurl}/review/${request.id}`, request) as Observable<any>;
    }

    approve(request: Request): Observable<any> {
        return this.http.put(`${this.baseurl}/approve/${request.id}`, request) as Observable<any>;
    }

    reject(request: Request): Observable<any> {
        return this.http.put(`${this.baseurl}/reject/${request.id}`, request) as Observable<any>;
    }

    change(request: Request): Observable<any> {
        return this.http.put(`${this,this.baseurl}/${request.id}`, request) as Observable<any>;
    }

    remove(id: number): Observable<any> {
        return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
    }
}