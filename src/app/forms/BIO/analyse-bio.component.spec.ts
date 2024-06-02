import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AnalyseBioComponent } from './analyse-bio.component';

describe('AnalyseBioComponent', () => {
  let component: AnalyseBioComponent;
  let fixture: ComponentFixture<AnalyseBioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyseBioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});