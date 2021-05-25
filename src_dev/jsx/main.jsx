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
      <div id="score-element">
        Score: {this.state.points}
      </div>
    );
  }
}


class PausePlay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paused: false,
    };

    this._pause = (e) => {
      this.setState({
        paused: true,
      });
    };

    this._play = (e) => {
      this.setState({
        paused: false,
      });
    };
  }

  componentDidMount() {
    document.addEventListener('setPause', this._pause);
    document.addEventListener('setEnd', this._pause);
    document.addEventListener('setPlay', this._play);
  }

  componentWillUnmount() {
    document.removeEventListener('setPause', this._pause);
    document.removeEventListener('setEnd', this._pause);
    document.removeEventListener('setPlay', this._play);
  }

  render() {
    let text = this.state.paused ? 'Play' : 'Pause';
    return (
        <div id="pause-play-element">{text}</div>
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
          <PausePlay />
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
