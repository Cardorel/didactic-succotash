import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemContentComponent } from './detail-item-content.component';

describe('DetailItemContentComponent', () => {
  let component: DetailItemContentComponent;
  let fixture: ComponentFixture<DetailItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailItemContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
