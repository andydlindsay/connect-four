import Cell from './Cell';

export default class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [];
    this.genBoard();
  }

  genBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board[y] = [];
      for (let x = 0; x < this.width; x++) {
        this.board[y].push(new Cell(x, y));
      }
    }
    return this;
  }
};
