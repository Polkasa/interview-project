import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowCollectComponent } from './how-collect.component';

describe('HowCollectComponent', () => {
  let component: HowCollectComponent;
  let fixture: ComponentFixture<HowCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowCollectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
