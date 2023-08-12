import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDogsComponent } from './search-dogs.component';
import { DogService } from '../../services/dog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    SearchDogsComponent,
  ],
  exports: [
    SearchDogsComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    DogService
  ]
})
export class SearchDogsModule { }
