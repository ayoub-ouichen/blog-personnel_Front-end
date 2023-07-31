import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayeerComponent } from './bayeer.component';

describe('BayeerComponent', () => {
  let component: BayeerComponent;
  let fixture: ComponentFixture<BayeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
