import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAdminComponent } from './n-admin.component';

describe('NAdminComponent', () => {
  let component: NAdminComponent;
  let fixture: ComponentFixture<NAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
