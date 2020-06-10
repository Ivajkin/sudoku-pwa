import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGridBlockComponent } from './sudoku-grid-block.component';

describe('SudokuGridBlockComponent', () => {
  let component: SudokuGridBlockComponent;
  let fixture: ComponentFixture<SudokuGridBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuGridBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuGridBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
