import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorldTimeService {
  constructor(private http: HttpClient) { }

  getCurrentTime(): Observable<any> {
    return this.http.get('http://worldtimeapi.org/api/ip');
  }
}
