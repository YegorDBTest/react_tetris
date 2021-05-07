const React = require('react');
const ReactDOM = require('react-dom');


class Field {

  static COLORS = {
    background: '#f8f5f1',
    backgroundNet: '#45526c',
    solidSquares: '#5aa897',
    pieceSquares: '#f8a488',
  };

  /**
   * Creation.
   * @param {number} width - Field width.
   * @param {number} height - Field height.
   */
  constructor(width, height) {
    this._width = width;
    this._height = height;
    this._squareSide = 10;
    this._pieceSquares = [];

    this._matrix = [];
    for (let i = 0; i < height; i++) {
      this._matrix.push(this._createEmptyRow());
    }

    this._screen = new TDG.screen.Screen('field-element', {
      dimensions: [width * this._squareSide + 1, height * this._squareSide + 1],
    });
    this._screen.addLayer('background', new TDG.layers.CanvasLayer);
    this._drawBackground();
    this._screen.addLayer('static', new TDG.layers.CanvasLayer);
    this._screen.addLayer('dynamic', new TDG.layers.CanvasLayer);
    this._addPiece();
  }

  /**
   * Get matrix.
   * @returns {boolean[][]} Matrix.
   */
  get matrix() {
    return this._matrix;
  }

  /**
   * Add piece.
   * @private
   */
  _addPiece() {
    this._pieceSquares = [
      {x: 4, y: 0},
    ];
    for (let square of this._pieceSquares) {
      this._fillPieceSquaresRect(square.x, square.y)
    }
  }

  /**
   * Fill square.
   * @param {number} x - X square coordinate.
   * @param {number} y - Y square coordinate.
   * @private
   */
  _fillSquare(x, y) {
    this._matrix[y][x] = true;
    if (!this._matrix[y].some(s => !s)) {
      this._matrix.splice(y, 1);
      this._matrix.splice(0, 0, this._createEmptyRow());
      this._refreshSolidSquares();
    } else {
      this._fillSolidSquaresRect(x, y);
    }
  }

  /**
   * Refresh solid squares rects fill.
   * @private
   */
  _refreshSolidSquares() {
    this._screen.layers.static.ctx.clearRect(
        0, 0, this._width * this._squareSide, this._height * this._squareSide
    );
    for (let y = 0; y < this._matrix.length; y++) {
      for (let x = 0; x < this._matrix[y].length; x++) {
        if (this._matrix[y][x]) {
          this._fillSolidSquaresRect(x, y);
        }
      }
    }
  }

  /**
   * Fill solid square rect.
   * @param {number} x - X square coordinate.
   * @param {number} y - Y square coordinate.
   * @private
   */
  _fillSolidSquaresRect(x, y) {
    this._fillSquareRect(x, y, this._screen.layers.static, Field.COLORS.solidSquares);
  }

  /**
   * Fill piece square rect.
   * @param {number} x - X square coordinate.
   * @param {number} y - Y square coordinate.
   * @private
   */
  _fillPieceSquaresRect(x, y) {
    this._fillSquareRect(x, y, this._screen.layers.dynamic, Field.COLORS.pieceSquares);
  }

  /**
   * Fill square rect.
   * @param {number} x - X square coordinate.
   * @param {number} y - Y square coordinate.
   * @param {TDG.layers.CanvasLayer} layer - Layer.
   * @param {color} color - Fill color.
   * @private
   */
  _fillSquareRect(x, y, layer, color) {
    layer.ctx.fillStyle = color;
    let rectX = this._squareSide * x + 1;
    let rectY = this._squareSide * y + 1;
    let rectSide = this._squareSide - 1;
    layer.ctx.fillRect(rectX, rectY, rectSide, rectSide);
  }

  /**
   * Create empty row.
   * @returns {boolean[]} - Field row fill data.
   * @private
   */
  _createEmptyRow() {
    let row = [];
    for (let i = 0; i < this._width; i++) {
      row.push(false);
    }
    return row;
  }

  /** Show matrix in console. */
  logMatrix() {
    for (let row of this._matrix) {
      console.log(row.map(s => s? 1 : 0));
    }
  }

  /**
   * Draw background.
   * @private
   */
  _drawBackground() {
    this._screen.layers.background.ctx.fillStyle = Field.COLORS.background;
    this._screen.layers.background.ctx.fillRect(
        0, 0, this._width * this._squareSide + 1, this._height * this._squareSide + 1
    );

    this._screen.layers.background.ctx.strokeStyle = Field.COLORS.backgroundNet;
    this._screen.layers.background.ctx.beginPath();
    let maxX = this._width * this._squareSide;
    let maxY = this._height * this._squareSide;
    for (let i = 0; i <= this._width; i++) {
      let x = this._squareSide * i + 0.5;
      this._screen.layers.background.ctx.moveTo(x, 0);
      this._screen.layers.background.ctx.lineTo(x, maxY);
    }
    for (let j = 0; j <= this._height; j++) {
      let y = this._squareSide * j + 0.5;
      this._screen.layers.background.ctx.moveTo(0, y);
      this._screen.layers.background.ctx.lineTo(maxX, y);
    }
    this._screen.layers.background.ctx.stroke();
  }
}


window.field = new Field(10, 20);


class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Lol, {this.props.name}
      </div>
    );
  }
}


ReactDOM.render(
  <HelloMessage name="Kek" />,
  document.getElementById('test')
);
