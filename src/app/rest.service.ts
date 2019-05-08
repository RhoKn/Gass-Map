import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { global } from './services/global';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  async createObject(route, object) {
    let res;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    try {
      this.http.post<any>(global.url + route, JSON.stringify(object), { headers: headers }).toPromise();
    } catch (error) {
      res = error;
    }
    return res;
  }

  async getApiObjects() {
    let res;
    try {
    res = await this.http.get<any>(global.getApisObject).toPromise();
  } catch (error) {
    res = error;
  }
  return res;
}

  async getAllObjects(route) {
    let res;
    try {
      res = await this.http.get<any>(global.url+route).toPromise();
    } catch (error) {
      res = error;
    }
    return res;
  }

  getObject(route, id): Observable<any> {
    return this.http.get(global.url + route + id).pipe(
      map(this.extractData));
  }

  updateObject(route, id, info): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(global.url + route + id, JSON.stringify(info), { headers: headers }).pipe(
      tap(_ => console.log(`updated object id=${id}`)),
      catchError(this.handleError<any>('updateObject'))
    );
  }

  async deleteObject(route, id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let res;
    try {
      res = this.http.delete<any>(global.url + route + id, { headers: headers }).toPromise();
    } catch (error) {
      res = error;
    }
    return res;
  }

  //Login
  async loginUser(route, user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let res;
    try {
      res = await this.http.post<any>(global.url + route, JSON.stringify(user), { headers: headers }).toPromise();
    } catch (error) {
      res = error;
    }
    return res;
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public httperrorHandling(error) {
      if (error.error instanceof ErrorEvent) {
        console.error("Error Event");
      } else {
        console.log(`error status : ${error.status} ${error.statusText}`);
        switch (error.status) {
          case 401:      //login
            console.log(401);
            break;
          case 403:     //forbidden
            //this.router.navigateByUrl("/unauthorized");
            console.log(403);
            break;
          case 404:     //forbidden
            //this.router.navigateByUrl("/unauthorized");
            console.log(404);
            break;
        }
      }
    return (error.error);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
