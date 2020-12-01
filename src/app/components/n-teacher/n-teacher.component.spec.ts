import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTeacherComponent } from './n-teacher.component';

describe('NTeacherComponent', () => {
  let component: NTeacherComponent;
  let fixture: ComponentFixture<NTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
