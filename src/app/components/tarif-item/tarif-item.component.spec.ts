import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TarifItemComponent} from './tarif-item.component';
import mockTarifs from "../../constants/mockTarif";

describe('TarifItemComponent', () => {
  let component: TarifItemComponent;
  let fixture: ComponentFixture<TarifItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tarif', mockTarifs)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 3 remarks when exactly 3 exist', () => {
  expect(component.getThreeInitialRemark().length).toBe(3);
});
});
