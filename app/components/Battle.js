var React = require('react');

function Battle(props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> Confirm Battle </p>
}

module.exports = Battle;