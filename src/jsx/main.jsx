const React = require('react');
const ReactDOM = require('react-dom');


class Field {

  /**
   * Creation.
   * @param {number} width - Field width.
   * @param {number} height - Field height.
   */
  constructor(width, height) {
    this._width = width;
    this._height = height;
    this._squareSide = 10;
    this._matrix = [];
    for (let i = 0; i < width; i++) {
      this._matrix.push(this._createEmptyRow());
    }

    this._screen = new TDG.screen.Screen('field-element', {
      dimensions: [width * this._squareSide, height * this._squareSide],
    });
    this._screen.addLayer('background', new TDG.layers.CanvasLayer);
    this._drawBackground();
    // this._screen.addLayer('static', new TDG.layers.CanvasLayer);
    // this._screen.addLayer('dynamic', new TDG.layers.SVGLayer);
  }

  /**
   * Get matrix.
   * @returns {boolean[][]} Matrix.
   */
  get matrix() {
    return this._matrix;
  }

  /**
   * Fill square.
   * @param {number} x - X square coordinate.
   * @param {number} y - Y square coordinate.
   */
  fillSquare(x, y) {
    this._matrix[x][y] = true;
    if (!this._matrix[x].some(s => !s)) {
      this._matrix.splice(x, 1);
      this._matrix.splice(0, 0, this._createEmptyRow());
    }
  }

  /**
   * Create empty row.
   * @returns {boolean[]} - Field row fill data.
   * @private
   */
  _createEmptyRow() {
    let row = [];
    for (let i = 0; i < this._height; i++) {
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
    this._screen.layers.background.ctx.strokeStyle = '#333333';
    for (let i = 0; i < this._width; i++) {
      for (let j = 0; j < this._height; j++) {
        let x = this._squareSide * i;
        let y = this._squareSide * j;
        this._screen.layers.background.ctx.rect(x, y, this._squareSide, this._squareSide);
        this._screen.layers.background.ctx.stroke();
      }
    }
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
