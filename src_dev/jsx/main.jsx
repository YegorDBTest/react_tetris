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

    this._clickPlay = (e) => {
      document.dispatchEvent(new CustomEvent('setPlay'));
    };

    this._clickPause = (e) => {
      document.dispatchEvent(new CustomEvent('setPause'));
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
    return (
        <div id="pause-play-element"
             className={this.state.paused ? "paused" : ""}
             onClick={this.state.paused ? this._clickPlay : this._clickPause} />
    );
  }
}


class Notification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showed: false,
    };

    this._pause = (e) => {
      this.setState({
        text: 'Pause',
        showed: true,
      });
    };

    this._end = (e) => {
      this.setState({
        text: 'Game over',
        showed: true,
      });
    };

    this._play = (e) => {
      this.setState({
        text: '',
        showed: false,
      });
    };
  }

  componentDidMount() {
    document.addEventListener('setPause', this._pause);
    document.addEventListener('setEnd', this._end);
    document.addEventListener('setPlay', this._play);
  }

  componentWillUnmount() {
    document.removeEventListener('setPause', this._pause);
    document.removeEventListener('setEnd', this._end);
    document.removeEventListener('setPlay', this._play);
  }

  render() {
    return (
        <div id="notification-element"
             className={this.state.showed ? "showed" : ""}>
          <div>{this.state.text}</div>
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
          <Notification />
          <PausePlay />
        </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
