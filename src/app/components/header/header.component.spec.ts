import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {tarifGroupAction} from "../../store/actions/tarif.action";
import {provideMockStore} from "@ngrx/store/testing";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Store;
  let route: ActivatedRoute

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers:[
        provideMockStore({}),
        { provide: ActivatedRoute, useValue: { queryParams: { subscribe: () => {} } } }  // Mock ActivatedRoute for testing purposes.  This will allow us to test the search functionality.  In a real-world scenario, you'd use a mock ActivatedRoute in your tests.  See https://angular.io/guide/testing#mocking-services for more details.  Here we're just using a dummy value for testing.  In a real-world scenario,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    store = TestBed.inject(Store);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch searchByNameOrByBenefit action with correct name when input is not empty or whitespace', () => {
    const mockEvent = { target: { value: 'test value' } } as unknown as Event;
    const storeSpy = spyOn(store as unknown as { dispatch: jasmine.Spy }, 'dispatch' as any);
    component.searchByNameOrByBenefit(mockEvent);
    expect(storeSpy).toHaveBeenCalledWith(tarifGroupAction.searchByNameOrByBenefit({ name: 'test value' }));
  });
});
