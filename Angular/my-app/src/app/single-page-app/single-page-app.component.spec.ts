import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageAppComponent } from './single-page-app.component';

describe('SinglePageAppComponent', () => {
  let component: SinglePageAppComponent;
  let fixture: ComponentFixture<SinglePageAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
