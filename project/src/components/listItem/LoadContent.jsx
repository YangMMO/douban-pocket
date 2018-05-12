import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class LoadContent extends Component {
  render () {
    return (
      <li className='load-content'>
        <span>
          { this.props.content }
        </span>
      </li>
    )
  }
}
