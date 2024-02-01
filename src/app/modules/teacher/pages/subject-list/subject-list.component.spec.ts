import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectListComponent } from './subject-list.component';

describe('SubjectListComponent', () => {
  let component: SubjectListComponent;
  let fixture: ComponentFixture<SubjectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectListComponent]
    });
    fixture = TestBed.createComponent(SubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
