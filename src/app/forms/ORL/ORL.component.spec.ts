import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ORLComponent } from "./ORL.component";
describe("ORLComponent", () => {
  let component: ORLComponent;
  let fixture: ComponentFixture<ORLComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ORLComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(ORLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
