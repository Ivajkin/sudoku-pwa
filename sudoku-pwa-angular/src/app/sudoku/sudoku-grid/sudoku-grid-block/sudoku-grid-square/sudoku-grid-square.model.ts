import { sudokuField } from 'src/app/sudoku/sudoku.model';

export class SudokuGridSquare {
    constructor(private positionX: number, private positionY: number) {
    }
    get squareNumber(): number {
        return sudokuField[this.positionX][this.positionY];
    }
}
