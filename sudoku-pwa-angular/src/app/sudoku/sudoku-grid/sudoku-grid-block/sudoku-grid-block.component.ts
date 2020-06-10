import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sudoku-grid-block',
  templateUrl: './sudoku-grid-block.component.html',
  styleUrls: ['./sudoku-grid-block.component.scss']
})
export class SudokuGridBlockComponent implements OnInit {
  @Input() blockNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
