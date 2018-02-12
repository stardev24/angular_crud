import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcatalougeComponent } from './pcatalouge.component';

describe('PcatalougeComponent', () => {
  let component: PcatalougeComponent;
  let fixture: ComponentFixture<PcatalougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcatalougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
