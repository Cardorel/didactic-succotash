import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIcoComponent } from './search-ico.component';

describe('SearchIcoComponent', () => {
  let component: SearchIcoComponent;
  let fixture: ComponentFixture<SearchIcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchIcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
