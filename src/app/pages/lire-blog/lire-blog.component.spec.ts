import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LireBlogComponent } from './lire-blog.component';

describe('LireBlogComponent', () => {
  let component: LireBlogComponent;
  let fixture: ComponentFixture<LireBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LireBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LireBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
