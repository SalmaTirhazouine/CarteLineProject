import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantelisteuserComponent } from './santelisteuser.component';

describe('SantelisteuserComponent', () => {
  let component: SantelisteuserComponent;
  let fixture: ComponentFixture<SantelisteuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SantelisteuserComponent]
    });
    fixture = TestBed.createComponent(SantelisteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
