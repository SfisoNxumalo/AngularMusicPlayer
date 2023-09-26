import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPlayComponent } from './bottom-play.component';

describe('BottomPlayComponent', () => {
  let component: BottomPlayComponent;
  let fixture: ComponentFixture<BottomPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomPlayComponent]
    });
    fixture = TestBed.createComponent(BottomPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
