import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alianzas } from './alianzas';

describe('Alianzas', () => {
  let component: Alianzas;
  let fixture: ComponentFixture<Alianzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alianzas],
    }).compileComponents();

    fixture = TestBed.createComponent(Alianzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
