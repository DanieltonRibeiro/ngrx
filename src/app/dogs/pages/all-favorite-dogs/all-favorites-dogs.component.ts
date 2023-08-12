import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { DogActions } from '../../actions/dogActions';
import { DogState } from '../../states/animals.states';

@Component({
  selector: 'app-all-favorites-dogs',
  templateUrl: './all-favorites-dogs.component.html',
  styleUrls: ['./all-favorites-dogs.component.scss']
})
export class AllFavoritesDogsComponent {


  @Select(DogState.feedDogs) dogs$!: Observable<any>;

  icon = { faWindowClose }

  constructor(
      private store: Store
  ) {}

  removeDog(id: number): void {
    this.store.dispatch(new DogActions.DeleteDog(id));
  }

}
