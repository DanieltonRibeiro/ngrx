import { NgModule } from '@angular/core';
import { AddDogsComponent } from './add-dogs.component';
import { CommonModule } from '@angular/common';
import {
  AllFavoritesDogsModule
} from '../all-favorite-dogs/all-favorites-dogs.module';

@NgModule({
  declarations: [
    AddDogsComponent,
  ],
  imports: [
    CommonModule,
    AllFavoritesDogsModule
  ],
  exports: [
    AddDogsComponent,
  ],
})
export class AddDogsModule {
}
