import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDogsComponent } from './search-dogs.component';
import { DogService } from '../../services/dog.service';



@NgModule({
  declarations: [
    SearchDogsComponent,
  ],
  exports: [
    SearchDogsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    DogService
  ]
})
export class SearchDogsModule { }
