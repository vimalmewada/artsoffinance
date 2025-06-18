import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocatorComponent } from './map-locator.component';

describe('MapLocatorComponent', () => {
  let component: MapLocatorComponent;
  let fixture: ComponentFixture<MapLocatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapLocatorComponent]
    });
    fixture = TestBed.createComponent(MapLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
