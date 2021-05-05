const React = require('react');
const ReactDOM = require('react-dom');


class Field {

  /**
   * Creation.
   * @param {number} width - Field width.
   * @param {number} height - Field height.
   */
  constructor(width, height) {
    this._height = height;
    this._matrix = [];
    for (let i = 0; i < width; i++) {
      this._matrix.push(this._createEmptyRow());
    }
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
}


window.field = new Field(3, 3);


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
