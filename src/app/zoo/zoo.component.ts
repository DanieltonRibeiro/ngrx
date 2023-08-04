import { Component, HostListener } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AnimalActions } from '../actions/animal.actions';
import { Observable } from 'rxjs';
import { AnimalsState } from '../states/animals.states';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent {


  constructor(
      private store: Store
  ) {}


  @HostListener('window:keyboard', ['$event'])
  getKeyCode(event: KeyboardEvent): void {
    const code = event.code.toLowerCase();
    if(code === 'enter'){
      event.stopPropagation();
      event.preventDefault();
      const value = (event.target as EventTarget as HTMLInputElement).value
      this.addAnimal(value);

    }
  }

  addAnimal(value: string){
    if(!value){
      return;
    }
    this.store.dispatch(new AnimalActions.AddAnimal(value));
    (document.querySelector('#nameAnimal') as HTMLInputElement).value = '';
  }
}
