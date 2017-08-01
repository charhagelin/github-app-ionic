import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //allowes us to use observables in the application = allowes us to subscribe to a data stream, similar to promises, but a promis can only fire once 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/do'; //lets us log out the data before dispaying it  
import 'rxjs/add/observable/of'; //allowes us to create an observables of values 
import 'rxjs/add/observable/throw';

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';
import { USER_LIST } from '../mocks/user.mocks';
import { REPOSITORY_LIST } from '../mocks/repository.mocks';

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  private baseUrl: string = 'http://api.github.com/users';
  private repoUrl: string = 'repos'

  constructor(private http: Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

    getUserInformation(username: string): Observable<User> {
      return this.http.get(`${this.baseUrl}/${username}`)
        .do(this.logData)
        .map(this.extractData)
        .do(this.logData)

        .catch(this.handleError)
    } 

    getRepositoryInformation(username: string): Observable<Repository[]> {
      return this.http.get(`${this.baseUrl}/${username}/${this.repoUrl}`)
        .do(this.logData)
        .map(this.extractData)
        .do(this.logData)

        .catch(this.handleError)
    }
//the function takes in username as a param and returns a repository list associated with username. returning the results as an observable
    getMockRepositoryInformation(username: string): Observable<Repository[]> {
      return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
    }

//the function takes in username: string as a param through which the USER_LIST can filter through. 
// we then tell it to return when user.name is equal to the username we pass in with tthe function. 
    getMockUserInformation(username: string): Observable<User> {
      return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
    }

    private handleError(error: Response | any) {
      return Observable.throw(error.json().error || "service error");
    }

    private extractData(response: Response) {
      return response.json();
    }

    private logData(response: Response) {
      console.log(response);
    }
}


