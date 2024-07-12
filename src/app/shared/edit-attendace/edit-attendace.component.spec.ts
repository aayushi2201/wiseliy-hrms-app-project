import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttendaceComponent } from './edit-attendace.component';

describe('EditAttendaceComponent', () => {
  let component: EditAttendaceComponent;
  let fixture: ComponentFixture<EditAttendaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAttendaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAttendaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
