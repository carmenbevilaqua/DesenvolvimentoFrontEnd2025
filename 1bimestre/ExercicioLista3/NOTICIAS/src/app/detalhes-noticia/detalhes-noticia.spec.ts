import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesNoticia } from './detalhes-noticia';

describe('DetalhesNoticia', () => {
  let component: DetalhesNoticia;
  let fixture: ComponentFixture<DetalhesNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesNoticia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesNoticia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
