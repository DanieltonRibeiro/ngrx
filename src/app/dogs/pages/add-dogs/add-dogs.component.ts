import { Component, HostListener } from '@angular/core';
import { Store } from '@ngxs/store';
import { DogActions } from '../../actions/dogActions';

@Component({
  selector: 'app-add-dogs',
  templateUrl: './add-dogs.component.html',
  styleUrls: ['./add-dogs.component.scss']
})
export class AddDogsComponent {


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
      this.addDog(value);

    }
  }

  addDog(value: string){
    if(!value){
      return;
    }
    this.store.dispatch(new DogActions.AddDog(value));
    (document.querySelector('#nameAnimal') as HTMLInputElement).value = '';
  }
}
