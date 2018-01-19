import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEmploysComponent } from './grid-employs.component';

describe('GridEmploysComponent', () => {
  let component: GridEmploysComponent;
  let fixture: ComponentFixture<GridEmploysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEmploysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEmploysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
