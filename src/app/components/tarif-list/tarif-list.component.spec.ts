import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TarifListComponent} from './tarif-list.component';
import {provideMockStore} from "@ngrx/store/testing";
import {Store} from "@ngrx/store";

describe('TarifListComponent', () => {
  let component: TarifListComponent;
  let fixture: ComponentFixture<TarifListComponent>;
  let store: Store

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifListComponent],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifListComponent);
    store = TestBed.inject(Store)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
