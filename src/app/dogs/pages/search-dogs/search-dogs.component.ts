import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DogService } from '../../services/dog.service';
import {
  animate,
  group, keyframes, query, stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-search-dogs',
  templateUrl: './search-dogs.component.html',
  styleUrls: ['./search-dogs.component.scss'],
  animations: [trigger('flyInOut', [
      transition(':enter', [
        query(':enter', [
            style({
              transform: 'translateX(-200%)',
              opacity: 0
            }),
            stagger(200, [
              animate('500ms ease-out', keyframes([
                style({
                  opacity: 1,
                  transform: 'translateX(15%)',
                  offset: 0.4
                }),
                style({
                  transform: 'translateX(0)',
                  offset: 1
                })
              ]))
            ])
        ],{optional: true}),
      ])
    ])
  ]
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
