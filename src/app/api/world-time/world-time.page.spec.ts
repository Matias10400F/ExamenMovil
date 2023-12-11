import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorldTimePage } from './world-time.page';

describe('WorldTimePage', () => {
  let component: WorldTimePage;
  let fixture: ComponentFixture<WorldTimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorldTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
