import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ECGComponent } from "./ECG.component";
describe("ECGComponent", () => {
  let component: ECGComponent;
  let fixture: ComponentFixture<ECGComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ECGComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(ECGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
