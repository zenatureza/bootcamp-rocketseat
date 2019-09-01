import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  static defaultProps = {};

  state = {
    newTech: '',
    techs: []
  };

  /* react components life cycle */
  // when compoenent is rendered on screen
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // when any component props or state update (parameters: (prevProps, prevState))
  componentDidUpdate(_, prevState) {
    // current props and state accessed through: this.props and this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // when component stop existing
  componentWillUnmount() { }
  /* --------------------------- */

  handleInputChange = e => {
    // state is immutable!
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    // using spread operator
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });

    console.log(this.state);
  }

  handleDelete = (tech) => {
    console.log(tech);

    this.setState({ techs: this.state.techs.filter(item => item !== tech) });
  }

  render() {
    return (
      // react fragment <></> (empty tag)
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <TechItem
            key={tech}
            tech={tech}
            onDelete={() => this.handleDelete(tech)} />)}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;