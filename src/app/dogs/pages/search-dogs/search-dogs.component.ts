import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-search-dogs',
  templateUrl: './search-dogs.component.html',
  styleUrls: ['./search-dogs.component.scss']
})
export class SearchDogsComponent implements OnInit {

  allImagensOfDogsByBreed$: Observable<string[]> = this.dogService.getAllImagesDogsByBreed().pipe(map((response: any) => response.message));

  constructor(
      private dogService: DogService
  ) {}

  ngOnInit(): void {
  }

  searchKeyCode(event: KeyboardEvent): void {
    const code = event.code.toLowerCase();
    if(code === 'enter'){
      event.stopPropagation();
      event.preventDefault();
      const value = (event.target as EventTarget as HTMLInputElement).value
      this.search(value);

    }
  }

  search(value: string): void {

  }

}
