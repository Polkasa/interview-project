import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowReturnComponent } from './how-return.component';

describe('HowReturnComponent', () => {
  let component: HowReturnComponent;
  let fixture: ComponentFixture<HowReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
