import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarProductoComponent } from './modal-agregar-producto.component';

describe('ModalAgregarProductoComponent', () => {
  let component: ModalAgregarProductoComponent;
  let fixture: ComponentFixture<ModalAgregarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
