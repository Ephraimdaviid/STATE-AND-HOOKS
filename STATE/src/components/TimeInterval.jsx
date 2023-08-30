import React, { Component } from 'react';

class TimeInterval extends Component {
  state = {
    mountedAt: new Date(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        mountedAt: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { mountedAt } = this.state;
    const elapsedTime = ((new Date() - mountedAt) / 1000).toFixed(2);

    return <p>Time Interval since Mount: {elapsedTime} seconds</p>;
  }
}

export default TimeInterval;
