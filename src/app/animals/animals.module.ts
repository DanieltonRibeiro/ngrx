import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsComponent } from './animals.component';

@NgModule({
  declarations: [
    AnimalsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AnimalsComponent,
  ],
})
export class AnimalsModule {
}
