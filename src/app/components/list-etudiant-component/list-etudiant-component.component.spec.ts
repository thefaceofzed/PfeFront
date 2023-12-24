import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantComponentComponent } from './list-etudiant-component.component';

describe('ListEtudiantComponentComponent', () => {
  let component: ListEtudiantComponentComponent;
  let fixture: ComponentFixture<ListEtudiantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEtudiantComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEtudiantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
