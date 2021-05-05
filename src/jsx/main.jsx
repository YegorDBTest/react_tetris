const React = require('react');
const ReactDOM = require('react-dom');


class FieldFilledSpace {

  /**
   * Creation.
   * @param {number} width - Field width.
   * @param {number} height - Field height.
   */
  constructor(width, height) {
    this._matrix = [];
    for (let i = 0; i < width; i++) {
      let row = [];
      for (let j = 0; j < height; j++) {
        row.push(false);
      }
      this._matrix.push(row);
    }
  }

  /**
   * Get matrix.
   * @returns {number[][]} Matrix.
   */
  get matrix() {
    return this._matrix;
  }
}


window.ffs = new FieldFilledSpace(10, 10);


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
