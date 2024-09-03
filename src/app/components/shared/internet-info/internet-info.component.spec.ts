import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InternetInfoComponent} from './internet-info.component';

describe('InternetInfoComponent', () => {
  let component: InternetInfoComponent;
  let fixture: ComponentFixture<InternetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetInfoComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('internetSpeed', 100);
    fixture.componentRef.setInput('isRotating', false);
    fixture.componentRef.setInput('textType', 'type');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate internet speed input type', () => {
    expect(typeof component.internetSpeed()).toBe('number');
  });

  it('should validate isRotating input type', () => {
    expect(typeof component.isRotating()).toBe('boolean');
  });

  it('should validate textType input type', () => {
    expect(typeof component.textType()).toBe('string');
  });
});
