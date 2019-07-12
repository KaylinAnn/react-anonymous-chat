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
}

export default Chat