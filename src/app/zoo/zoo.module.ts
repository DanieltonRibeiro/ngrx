import { NgModule } from '@angular/core';
import { ZooComponent } from './zoo.component';
import { CommonModule } from '@angular/common';
import { AnimalsModule } from '../animals/animals.module';

@NgModule({
  declarations: [
    ZooComponent,
  ],
  imports: [
    CommonModule,
    AnimalsModule
  ],
  exports: [
    ZooComponent,
  ],
})
export class ZooModule {
}
