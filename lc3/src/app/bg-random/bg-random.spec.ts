import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgRandom } from './bg-random';

describe('BgRandom', () => {
  let component: BgRandom;
  let fixture: ComponentFixture<BgRandom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgRandom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgRandom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
