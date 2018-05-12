import React, { Component } from 'react'

export default class InfoItem extends Component {
  constructor () {
    super()
    this.state = {
      imageHeight: 0
    }
  }

  componentWillMount () {
    this._updateSize()
  }

  _updateSize () {
    this.setState({ imageHeight: document.documentElement.clientWidth / 4 })
  }

  render () {
    return (
      <li>
        <div style={{ height: this.state.imageHeight, backgroundImage: `url(${this.props.item.avatars.small})` }} />
        <h4>{this.props.item.name}</h4>
      </li>
    )
  }
}
