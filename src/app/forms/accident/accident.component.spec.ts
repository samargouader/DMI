import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FicheAccidentComponent } from "./accident.component";
describe("FicheAccidentComponent", () => {
  let component: FicheAccidentComponent;
  let fixture: ComponentFixture<FicheAccidentComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FicheAccidentComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
