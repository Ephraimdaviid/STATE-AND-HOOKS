import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class PersonProfile extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'A software developer',
      imgSrc: '/bandmember.jpg', // Placeholder image
      profession: 'Developer',
    },
    show: false,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PersonProfile;
