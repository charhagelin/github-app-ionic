import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //allowes us to use observables in the application = allowes us to subscribe to a data stream, similar to promises, but a promis can only fire once 
import 'rxjs/add/observable/of'; //allowes us to create an observables of values 


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

  constructor() {
    console.log('Hello GitHubServiceProvider Provider');
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
}


