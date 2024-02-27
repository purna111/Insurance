import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityDialogComponent } from './eligibility-dialog.component';

describe('EligibilityDialogComponent', () => {
  let component: EligibilityDialogComponent;
  let fixture: ComponentFixture<EligibilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
