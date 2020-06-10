import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGridSquareComponent } from './sudoku-grid-square.component';

describe('SudokuGridSquareComponent', () => {
  let component: SudokuGridSquareComponent;
  let fixture: ComponentFixture<SudokuGridSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuGridSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuGridSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
