import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDialogComponent } from './encadrant-dialog.component';

describe('EncadrantDialogComponent', () => {
  let component: EncadrantDialogComponent;
  let fixture: ComponentFixture<EncadrantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncadrantDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncadrantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
