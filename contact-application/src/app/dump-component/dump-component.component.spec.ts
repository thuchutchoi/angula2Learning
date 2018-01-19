import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpComponentComponent } from './dump-component.component';

describe('DumpComponentComponent', () => {
  let component: DumpComponentComponent;
  let fixture: ComponentFixture<DumpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
