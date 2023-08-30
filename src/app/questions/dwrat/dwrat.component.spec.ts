import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwratComponent } from './dwrat.component';

describe('DwratComponent', () => {
  let component: DwratComponent;
  let fixture: ComponentFixture<DwratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DwratComponent]
    });
    fixture = TestBed.createComponent(DwratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
