import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkRequestService {


  constructor(private http: HttpClient) { }
  
  getFetchApiData(url: string): Observable<any> {
         return this.http.get<any>(url);
      }

      getPosts(categoryId: number, page: number): Observable<any> {
        const urlAppend = "category="+categoryId+"&page="+page
        const url = 'http://103.91.187.26:8000/v1/shop/post/?'+urlAppend;
        //alert(url)
        return this.http.get<any>(url);
      }

      deleteApiDataWithToken(url: string, token: string): Observable<any> {
        // Prepare the headers with the Bearer token
        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + token
        });
    
        // Make the HTTP request with the headers
        return this.http.delete<any[]>(url, { headers: headers });
      }

    
      
      getFetchApiDataToken(url: string, token: string): Observable<any> {
        // Prepare the headers with the Bearer token
        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + token
        });
    
        // Make the HTTP request with the headers
        return this.http.get<any>(url, { headers: headers });
      }

  postFetchApiData(data: any, url: string): Observable<any> {
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       
      })
    }).pipe(
      catchError(this.handleError)
    );
  }


  


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        
        //  ${error.status}, ` + `body message: ${error.message} +
        // body was: ${error.error}
      );
        
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  };
}