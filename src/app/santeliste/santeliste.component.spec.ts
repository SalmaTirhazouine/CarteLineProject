import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantelisteComponent } from './santeliste.component';

describe('SantelisteComponent', () => {
  let component: SantelisteComponent;
  let fixture: ComponentFixture<SantelisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SantelisteComponent]
    });
    fixture = TestBed.createComponent(SantelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
