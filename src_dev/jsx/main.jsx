const React = require('react');
const ReactDOM = require('react-dom');

const { Field } = require('../js/field');


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


class App extends React.Component {

  componentDidMount() {
    window.field = new Field(10, 20);
  }

  render() {
    return (
        <div>
          <Score />
          <div id="field-element"/>
          <div id="preview-element"/>
        </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
