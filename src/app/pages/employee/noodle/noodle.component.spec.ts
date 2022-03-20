import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodleComponent } from './noodle.component';

describe('NoodleComponent', () => {
  let component: NoodleComponent;
  let fixture: ComponentFixture<NoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoodleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
