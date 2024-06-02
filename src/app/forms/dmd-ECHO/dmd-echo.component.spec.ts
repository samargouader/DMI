import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DmdEchoComponent } from './dmd-echo.component';

describe('DmdEchoComponent', () => {
  let component: DmdEchoComponent;
  let fixture: ComponentFixture<DmdEchoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DmdEchoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmdEchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});