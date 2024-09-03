import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Store} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {ActivatedRoute} from "@angular/router";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store;
  let route: ActivatedRoute

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideMockStore({}),
        { provide: ActivatedRoute, useValue: { queryParams: { subscribe: () => {} } } }  // Mock ActivatedRoute for testing purposes.  This will allow us to test the search functionality.  In a real-world scenario, you'd use a mock ActivatedRoute in your tests.  See https://angular.io/guide/testing#mocking-services for more details.  Here we're just using a dummy value for testing.  In a real-world scenario,

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.inject(Store);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'VerivoxTestProject' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('VerivoxTestProject');
  });

});
