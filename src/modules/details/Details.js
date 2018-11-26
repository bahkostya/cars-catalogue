import React, { Component } from 'react';

class Details extends Component {
  render() {
    const { match } = this.props;
    return <div>Details, {match.params.id}</div>;
  }
}

export default Details;
