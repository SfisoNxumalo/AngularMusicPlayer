import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePLayerComponent } from './online-player.component';

describe('OnlinePLayerComponent', () => {
  let component: OnlinePLayerComponent;
  let fixture: ComponentFixture<OnlinePLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinePLayerComponent]
    });
    fixture = TestBed.createComponent(OnlinePLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
