import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSavedComponent } from './v-saved.component';

describe('VSavedComponent', () => {
  let component: VSavedComponent;
  let fixture: ComponentFixture<VSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
