import React, { Component } from 'react';


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email } = this.state;
    console.log('Username:', username);
    console.log('Email:', email);
  };

  render() {
    const { username, email } = this.state;

    return (
      <div className="user-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;

