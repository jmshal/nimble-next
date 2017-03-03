import React, { Component } from 'react';
import suggestions from '../assets/suggestions';

class SearchBox extends Component {
  state = {
    suggestion: 0,
  };
  componentDidMount() {
    setInterval(this.pickRandomSuggestion, 1e4);
    this.pickRandomSuggestion();
  }
  pickRandomSuggestion = () => {
    const index = Math.floor(Math.random() * (suggestions.length - 1));
    this.setState({ suggestion: index });
  }
  getSuggestion() {
    return suggestions[this.state.suggestion];
  }
  handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowRight': {
        if (!this.props.value) {
          this.handleChange(this.getSuggestion());
        }
        break;
      }
      default: {
        // Ignore
      }
    }
  }
  handleChange(value) {
    this.props.onChange(value);
  }
  render() {
    return (
      <div className="SearchBox">
        <input
          value={this.props.value}
          placeholder={this.getSuggestion()}
          onKeyDown={this.handleKeyDown}
          onChange={event => this.handleChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBox;
