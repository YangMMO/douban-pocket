import React, { Component, PropTypes } from 'react'

export default class NavItem extends Component {
  handleActiveType () {
    if (this.props.navitem.type === this.props.tags) {
      return '#2aac5e'
    }
  }

  handleActiveNav () {
    if (this.props.onClickNav) {
      this.props.onClickNav(this.props.navitem.type)
    }
  }

  render () {
    let title = this.props.navitem.title
    let icon = this.props.navitem.icon
    return (
      <div className='nav-item'>
        <div className='nav-btn' style={{ color: this.handleActiveType()}} onClick={this.handleActiveNav.bind(this)}>
          <div className={`iconfont ${icon} ft-s`} />
          <span className='btn-title'>{ title }</span>
        </div>
      </div>
    )
  }
}
