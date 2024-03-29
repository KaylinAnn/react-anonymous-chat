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

  render() {
    if (this.state.redirect)
      return (
        <Redirect
          to={{
            pathname: '/chat',
            user: this.state.user
          }}
        ></Redirect>
      )
    return (
      <React.Fragment>
        <Row
          className='d-flex justify-content-center align-item-center w-100 mt-5'
          style={{
            minHeight: '100%'
          }}
        >
          <Col xs={10} sm={10} md={4} lg={4} className='mx-auto mt-5'>
            {this.state.error !== null && (
              <Alert variant='danger'>{this.state.error}</Alert>
            )}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type='text'
                  value={this.state.username}
                  placeholder='Enter Username'
                  onChange={this.handleChange}
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={this.state.isLoading}
                variant='primary'
                type='submit'
                className='btn-block'
              >
                {this.state.isLoading ? (
                  <>
                    <Spinner
                      as='span'
                      animation='grow'
                      size='sm'
                      role='status'
                      aria-hidden='true'
                    ></Spinner>
                    Loading...
                  </>
                ) : (
                    <span>Login</span>
                  )}
              </Button>
              <p className='pt-3'>
                Don't have an account? <Link to='/signup'>Create One</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    )
  }

}

export default Home;