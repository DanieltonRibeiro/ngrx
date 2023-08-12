import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFavoritesDogsComponent } from './all-favorites-dogs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AllFavoritesDogsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    AllFavoritesDogsComponent,
  ],
})
export class AllFavoritesDogsModule {
}
