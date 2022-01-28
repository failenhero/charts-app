import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsCreationComponent } from './charts-creation.component';

describe('ChartsCreationComponent', () => {
  let component: ChartsCreationComponent;
  let fixture: ComponentFixture<ChartsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
