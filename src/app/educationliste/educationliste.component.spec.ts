import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationlisteComponent } from './educationliste.component';

describe('EducationlisteComponent', () => {
  let component: EducationlisteComponent;
  let fixture: ComponentFixture<EducationlisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationlisteComponent]
    });
    fixture = TestBed.createComponent(EducationlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
