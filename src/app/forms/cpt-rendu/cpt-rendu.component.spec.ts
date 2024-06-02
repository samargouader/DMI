import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CptRenduComponent } from "./cpt-rendu.component";
describe("CptRenduComponent", () => {
  let component: CptRenduComponent;
  let fixture: ComponentFixture<CptRenduComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CptRenduComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(CptRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
