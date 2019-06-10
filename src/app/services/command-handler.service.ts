import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class CommandHandlerService {

  constructor(private http: HttpClient) { }

  insertCommand(cmd) {
    let command = 'cd ../ && ' + cmd.toString();
    return this.http.post(environment.COMMAND_API, {query: command})
    .pipe(
      catchError(err => err));
  }
}
