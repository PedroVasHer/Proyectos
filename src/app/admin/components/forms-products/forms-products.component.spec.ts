import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsProductsComponent } from './forms-products.component';

describe('FormsProductsComponent', () => {
  let component: FormsProductsComponent;
  let fixture: ComponentFixture<FormsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
