const React = require('react');
const ReactDOM = require('react-dom');

const { Field } = require('../js/field');


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
