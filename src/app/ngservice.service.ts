import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchTaskList():Observable<any>{
    return this._http.get<any>("http://localhost:5000/getTasks");
  }

  fetchDeleteTask(id:number):Observable<any>{
    return this._http.delete(`http://localhost:5000/delete/${id}`,{responseType:'text'});
  }

  addTask(task:Object):Observable<Object>{
    return this._http.post("http://localhost:5000/addTask",task);
  }

  update(id:number):Observable<any>{
    return this._http.put(`http://localhost:5000/update/${id}`,{responseType:'text'});
  }
}
