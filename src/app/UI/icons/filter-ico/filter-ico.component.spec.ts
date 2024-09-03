import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterIcoComponent} from './filter-ico.component';

describe('FilterIcoComponent', () => {
  let component: FilterIcoComponent;
  let fixture: ComponentFixture<FilterIcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterIcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
