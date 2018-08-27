import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userLogin } from '../../actions/userActions';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state ={
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e){
    e.preventDefault();
    const { email, password } = this.state;
    this.props.userLogin(email, password);
  }
  
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Ingresar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  userLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);