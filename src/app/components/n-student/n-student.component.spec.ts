import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NStudentComponent } from './n-student.component';

describe('NStudentComponent', () => {
  let component: NStudentComponent;
  let fixture: ComponentFixture<NStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
