import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadearComponent } from './headear.component';

describe('HeadearComponent', () => {
  let component: HeadearComponent;
  let fixture: ComponentFixture<HeadearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
