import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})
export class dataService
{
    constructor(private http:HttpClient)
    {

    }
    getData()
    {
        return this.http.get('http://localhost:4000/api/tasks');
    }
    setData()
    {

    }
}