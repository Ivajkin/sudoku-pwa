import { Component, OnInit, Input } from '@angular/core';
import { SudokuGridSquare } from './sudoku-grid-square.model';

@Component({
  selector: 'app-sudoku-grid-square',
  templateUrl: './sudoku-grid-square.component.html',
  styleUrls: ['./sudoku-grid-square.component.scss']
})
export class SudokuGridSquareComponent implements OnInit {
  @Input() blockNumber: number;
  @Input() squareInBlockNumber: number;

  constructor() {
  }
  public square: SudokuGridSquare;

  ngOnInit() {
    const x = this.blockNumber % 3 * 3 + this.squareInBlockNumber % 3;
    const y = Math.round(this.blockNumber / 3) * 3 + Math.round(this.squareInBlockNumber / 3);
    this.square = new SudokuGridSquare(x, y);
  }

}
