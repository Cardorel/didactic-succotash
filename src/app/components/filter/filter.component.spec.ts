import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FilterComponent} from './filter.component';
import {tarifGroupAction} from "../../store/actions/tarif.action";
import {Store} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let store:Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    store = TestBed.inject(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch sortByPrice action with ascending sort type when sortByCheaperPrice is called', () => {
    const storeSpy = spyOn(store as unknown as { dispatch: jasmine.Spy }, 'dispatch' as any);
    component.sortByCheaperPrice('asc');
    expect(storeSpy).toHaveBeenCalledWith(tarifGroupAction.sortByPrice({ sort: 'asc' }));
  });

  it('should dispatch sortByPrice action with descending sort type when sortByCheaperPrice is called', () => {
    const storeSpy = spyOn(store as unknown as { dispatch: jasmine.Spy }, 'dispatch' as any);
    component.sortByCheaperPrice('desc');
    expect(storeSpy).toHaveBeenCalledWith(tarifGroupAction.sortByPrice({ sort: 'desc' }));
  });

  it('should dispatch sortByPrice action with descending sort type when sortByExpensivePrice is called', () => {
    const storeSpy = spyOn(store as unknown as { dispatch: jasmine.Spy }, 'dispatch' as any);
    component.sortByExpensivePrice('desc');
    expect(storeSpy).toHaveBeenCalledWith(tarifGroupAction.sortByPrice({ sort: 'desc' }));
  });

  it('should dispatch sortByPrice action with descending sort type when sortByExpensivePrice is called', () => {
  const storeSpy = spyOn(store as unknown as { dispatch: jasmine.Spy }, 'dispatch' as any);
  component.sortByExpensivePrice('desc');
  expect(storeSpy).toHaveBeenCalledWith(tarifGroupAction.sortByPrice({ sort: 'desc' }));
});

  it('should dispatch sortByName action with ascending name when sortByNameAsc is called', () => {
  const storeSpy = spyOn(store as unknown as { dispatch: jasmine.Spy }, 'dispatch' as any);
  component.sortByNameAsc('asc');
  expect(storeSpy).toHaveBeenCalledWith(tarifGroupAction.sortByName({ name: 'asc' }));
});

});
