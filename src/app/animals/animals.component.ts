import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AnimalsState } from '../states/animals.states';
import { AnimalActions } from '../actions/animal.actions';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {


  @Select(AnimalsState.feedAnimals) animas$!: Observable<any>

  constructor(
      private store: Store
  ) {}

  removeAnimal(id: number): void {
    this.store.dispatch(new AnimalActions.DeleteAnimal(id));
  }

}
