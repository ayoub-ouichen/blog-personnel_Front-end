import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBlogsComponent } from './liste-blogs.component';

describe('ListeBlogsComponent', () => {
  let component: ListeBlogsComponent;
  let fixture: ComponentFixture<ListeBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
