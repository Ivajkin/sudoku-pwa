import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { SudokuGridComponent } from './sudoku/sudoku-grid/sudoku-grid.component';
import { SudokuGridSquareComponent } from './sudoku/sudoku-grid/sudoku-grid-block/sudoku-grid-square/sudoku-grid-square.component';
import { SudokuGridBlockComponent } from './sudoku/sudoku-grid/sudoku-grid-block/sudoku-grid-block.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    SudokuGridComponent,
    SudokuGridSquareComponent,
    SudokuGridBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
