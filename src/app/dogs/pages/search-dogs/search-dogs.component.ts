import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DogService } from '../../services/dog.service';
import {
  animate,
  group,
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
        style({
          transition: 'transform .4s ease-in',
          transform: 'translateX(-200%)',
          opacity: 0
        }),
        group([
          animate('0.3s 0.1s linear', style({
            transform: 'translateX(0)',
            width: '*',
          })),
          animate('0.3s ease', style({
            opacity: 1,

          }))
        ])
      ]),
      transition(':leave', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(100%)',
            width: '*'
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
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
