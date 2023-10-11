import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPLayerComponent } from './local-player.component';

describe('LocalPLayerComponent', () => {
  let component: LocalPLayerComponent;
  let fixture: ComponentFixture<LocalPLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalPLayerComponent]
    });
    fixture = TestBed.createComponent(LocalPLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
