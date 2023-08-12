import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDogsComponent } from './add-dogs.component';

describe(AddDogsComponent.name, () => {
  let component: AddDogsComponent;
  let fixture: ComponentFixture<AddDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDogsComponent]
    });
    fixture = TestBed.createComponent(AddDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
