import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraContentComponent } from './extra-content.component';

describe('ExtraContentComponent', () => {
  let component: ExtraContentComponent;
  let fixture: ComponentFixture<ExtraContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
