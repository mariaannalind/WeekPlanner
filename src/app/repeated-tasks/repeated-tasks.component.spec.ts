import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatedTasksComponent } from './repeated-tasks.component';

describe('RepeatedTasksComponent', () => {
  let component: RepeatedTasksComponent;
  let fixture: ComponentFixture<RepeatedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
