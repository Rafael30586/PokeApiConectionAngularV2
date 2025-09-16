import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStatsComponent } from './base-stats.component';

describe('BaseStatsComponent', () => {
  let component: BaseStatsComponent;
  let fixture: ComponentFixture<BaseStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseStatsComponent]
    });
    fixture = TestBed.createComponent(BaseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
