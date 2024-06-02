import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DmdTDMComponent } from "./dmd-tdm.component";
describe("DmdTDMComponent", () => {
  let component: DmdTDMComponent;
  let fixture: ComponentFixture<DmdTDMComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DmdTDMComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(DmdTDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
