import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitHubServiceProvider } from '../../providers/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';


/**
 * Generated class for the SearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username' //sätter url:n och i detta fall slug
})
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private github: GitHubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation() {
    this.github.getUserInformation(this.username).subscribe((data: User ) => this.user = data);
    this.github.getRepositoryInformation(this.username).subscribe((data: Repository[] ) => this.repositories = data);
    // this.github.getMockUserInformation(this.username).subscribe((data: User) => this.user = data);  
    // this.github.getMockRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }



  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();

    }
  }

}
