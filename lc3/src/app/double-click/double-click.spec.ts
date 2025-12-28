import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleClick } from './double-click';

describe('DoubleClick', () => {
  let component: DoubleClick;
  let fixture: ComponentFixture<DoubleClick>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleClick]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleClick);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
