import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailComponent} from './detail.component';
import {Store} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {ActivatedRoute} from "@angular/router";
import mockTarifs from "../../constants/mockTarif";
import {selectTarifs} from "../../store/reducers/tarif.store";
import {of} from "rxjs";

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let store: Store;
  let route : ActivatedRoute

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectTarifs, value: mockTarifs }
          ]
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
            queryParams: of({})
          } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    route = TestBed.inject(ActivatedRoute)
    store = TestBed.inject(Store)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
