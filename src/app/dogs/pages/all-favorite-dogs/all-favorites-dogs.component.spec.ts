import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFavoritesDogsComponent } from './all-favorites-dogs.component';

describe('AnimalsComponent', () => {
  let component: AllFavoritesDogsComponent;
  let fixture: ComponentFixture<AllFavoritesDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllFavoritesDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFavoritesDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
