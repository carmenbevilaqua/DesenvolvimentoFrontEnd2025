import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProcutoComponent } from './detalhe-procuto-component';

describe('DetalheProcutoComponent', () => {
  let component: DetalheProcutoComponent;
  let fixture: ComponentFixture<DetalheProcutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheProcutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheProcutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
