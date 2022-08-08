import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBanerComponent } from './aside-baner.component';

describe('AsideBanerComponent', () => {
  let component: AsideBanerComponent;
  let fixture: ComponentFixture<AsideBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
