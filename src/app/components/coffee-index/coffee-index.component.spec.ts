import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeIndexComponent } from './coffee-index.component';

describe('CoffeeIndexComponent', () => {
  let component: CoffeeIndexComponent;
  let fixture: ComponentFixture<CoffeeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
