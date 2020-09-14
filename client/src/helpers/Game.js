import Board from './Board';

export default class {
  constructor() {
    this.board = new Board(7, 6);
    this.genRandomPieces();
  }

  genRandomPieces(amount = 10) {
    for (let i = 0; i < amount; i++) {
      const x = Math.floor(Math.random() * this.board.width);
      const y = Math.floor(Math.random() * this.board.height);
      const colors = ['red', 'blue'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      this.board.board[y][x].content = color;
    }
  }
};
