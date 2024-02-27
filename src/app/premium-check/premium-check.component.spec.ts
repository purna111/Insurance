import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCheckComponent } from './premium-check.component';

describe('PremiumCheckComponent', () => {
  let component: PremiumCheckComponent;
  let fixture: ComponentFixture<PremiumCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
