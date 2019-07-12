import React from 'react'
import { CometChat } from '@cometchat-pro/chat'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { Redirect } from 'react-router-dom'
import uuid from 'uuid'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      user: null,
      receiverID: 'supergroup',
      messageText: '',
      messages: [],
      authToken: null,
      messageType: CometChat.MESSAGE_TYPE.TEXT,
      receiverType: CometChat.RECEIVER_TPYE.GROUP
    }
  }

  render() {
    if (this.state.redirect) return <Redirect to='/'></Redirect>
    return (
      <div
        className='bg-light page'
        style={{ height: '100vh', overflowX: 'hidden' }}
      >
        <Row>
          <Col>
            <Container>
              <div className='d-flex align-items-center justift-content-between'>
                <h3 className='text-center py-3 d-inline'>
                  React Anonymous Chat
              </h3>
                <Button onClick={e => this.logout()} variant='outline-primary'>
                  Logout
              </Button>
              </div>
              <ul className='list-group' style={{ marginBottom: '60px' }}>
                {this.state.messages.length > 0 ? (
                  this.state.messages.map(msg => (
                    <li className='list-group-item' key={uuid()}>
                      <strong>{msg.sender.name}</strong>
                      <p>{msg.text}</p>
                    </li>
                  ))
                ) : (
                    <div className='text-center mt-5 pt-5'>
                      <p className='lead text-center'> Fetching Messages</p>
                    </div>
                  )}
              </ul>
            </Container>
          </Col>
        </Row>
        <Navbar fixed='bottom'>
          <Container>
            <Form
              inline
              className='w-100 d-flex justify-content-between align-items-center'
              onSubmit={this.sendMessage}
            >
              <Form.Group style={{ flex: 1 }}>
                <Form.Control
                  value={this.state.messageText}
                  style={{ width: '100%' }}
                  required
                  type='text'
                  placaeholder='Type Message here...'
                  onChange={this.handleChange}
                ></Form.Control>
              </Form.Group>
              <Button variant='primary' type='submit'>
                Send
              </Button>
            </Form>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Chat