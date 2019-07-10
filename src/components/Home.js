import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { CometChat } from '@cometchat-pro/chat';
import { Redirect, Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      user: null,
      error: null,
      redirect: false,
      isLoading: false
    }
  }

  handleChange = e => {
    this.setState({ username: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const username = this.state.username
    this.setState({ username: '', isLoading: true })
    CometChat.login(username, process.env.REACT_APP_COMETCHAT_APIKEY)
      .then(user => {
        this.setState({ redirect: true, user, isLoading: false })
        localStorage.setItem('cometchat:authToken', user.authToken)
      })
      .catch(err => {
        this.setState({ error: err.message, isLoading: false })
      })
  }

}

export default Home;