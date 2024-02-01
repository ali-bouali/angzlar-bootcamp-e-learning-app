import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectComponent } from './manage-subject.component';

describe('ManageSubjectComponent', () => {
  let component: ManageSubjectComponent;
  let fixture: ComponentFixture<ManageSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSubjectComponent]
    });
    fixture = TestBed.createComponent(ManageSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
