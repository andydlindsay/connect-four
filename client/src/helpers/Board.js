import Cell from './Cell';

export default class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [];
    this.reset();
  }

  reset() {
    for (let y = 0; y < this.height; y++) {
      this.board[y] = [];
      for (let x = 0; x < this.width; x++) {
        this.board[y].push(new Cell(x, y));
      }
    }
    return this;
  }

  placeLowest(color, x) {
    for (let y = this.board.length - 1; y >= 0; y--) {
      if (!this.board[y][x].content) {
        return this.board[y][x].content = color;
      }
    }
  }

  checkForWin() {
    const amountToWin = 4;

    // check horizontal
    for (const row of this.board) {
      let inARow = 0;
      let currentColor;
      for (const cell of row) {
        if (cell.content) {
          if (cell.content === currentColor) {
            inARow++;
          } else {
            currentColor = cell.content;
            inARow = 1;
          }
        } else {
          inARow = 0;
        }
        if (inARow === amountToWin) {
          return true;
        }
      }
    }

    // check vertical
    for (let x = 0; x < this.width; x++) {
      let inARow = 0;
      let currentColor;
      for (let y = 0; y < this.height; y++) {
        const cell = this.board[y][x];
        if (cell.content) {
          if (cell.content === currentColor) {
            inARow++;
          } else {
            currentColor = cell.content;
            inARow = 1;
          }
        } else {
          inARow = 0;
        }
        if (inARow === amountToWin) {
          return true;
        }
      }
    }

    // check diagonals
    for (let k = 0; k < this.width + this.height; k++) {
      let inARow = 0;
      let currentColor;
      for (let y = this.height - 1; y >= 0; y--) {
        const x = k - y;
        if (x >= 0 && x < this.width) {
          const cell = this.board[y][x];
          if (cell.content) {
            if (cell.content === currentColor) {
              inARow++;
            } else {
              currentColor = cell.content;
              inARow = 1;
            }
          } else {
            inARow = 0;
          }
          if (inARow === amountToWin) {
            return true;
          }
        }
      }
    }

    for (let k = 0; k < this.width + this.height; k++) {
      let inARow = 0;
      let currentColor;
      for (let y = this.height - 1; y >= 0; y--) {
        const x = k - (this.height - y);
        if (x >= 0 && x < this.width) {
          const cell = this.board[y][x];
          if (cell.content) {
            if (cell.content === currentColor) {
              inARow++;
            } else {
              currentColor = cell.content;
              inARow = 1;
            }
          } else {
            inARow = 0;
          }
          if (inARow === amountToWin) {
            return true;
          }
        }
      }
    }

    return false;
  }

  chooseCompMove(difficulty) {
    switch (difficulty) {
      case 'easy':
        return Math.floor(Math.random() * this.width);
      default:
        return 1;
    }
  }
};
