import { Component, Input } from '@angular/core';
import { User} from '../../models/user.interface'

/**
 * Generated class for the SearchResultComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-result',
  templateUrl: 'search-result.component.html'
})
export class SearchResultComponent {


 @Input() user: User

}
