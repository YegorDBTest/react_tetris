const React = require('react');
const ReactDOM = require('react-dom');

const { Field } = require('../js/field');


window.field = new Field(10, 20);


class PointsBoard extends React.Component {
  render() {
    return (
      <div>
        Points: {this.props.points}
      </div>
    );
  }
}


ReactDOM.render(
  <PointsBoard points="0" />,
  document.getElementById('points')
);


document.addEventListener('addPoints', (e) => {
  ReactDOM.render(
      <PointsBoard points={e.detail.points} />,
      document.getElementById('points')
  );
});
