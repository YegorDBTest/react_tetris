const React = require('react');
const ReactDOM = require('react-dom');

const { Field } = require('../js/field');


window.field = new Field(10, 20);


class Score extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      points: 0,
    };
    this._refreshPoints = (e) => {
      this.setState({
        points: e.detail.points,
      });
    };
  }

  componentDidMount() {
    document.addEventListener('addPoints', this._refreshPoints);
  }

  componentWillUnmount() {
    document.removeEventListener('addPoints', this._refreshPoints);
  }

  render() {
    return (
      <div>
        Score: {this.state.points}
      </div>
    );
  }
}


ReactDOM.render(
  <Score />,
  document.getElementById('score')
);
