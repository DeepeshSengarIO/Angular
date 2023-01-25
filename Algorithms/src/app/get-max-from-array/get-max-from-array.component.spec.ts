import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMaxFromArrayComponent } from './get-max-from-array.component';

describe('GetMaxFromArrayComponent', () => {
  let component: GetMaxFromArrayComponent;
  let fixture: ComponentFixture<GetMaxFromArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMaxFromArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMaxFromArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
