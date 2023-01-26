import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatInAMazeComponent } from './rat-in-a-maze.component';

describe('RatInAMazeComponent', () => {
  let component: RatInAMazeComponent;
  let fixture: ComponentFixture<RatInAMazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatInAMazeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatInAMazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
