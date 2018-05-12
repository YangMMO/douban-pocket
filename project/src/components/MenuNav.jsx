import React, { Component, PropTypes } from 'react'
import NavItem from './NavItem'

export default class MenuNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navLists: [{
        title: '电影',
        type: 'movie',
        icon: 'icon-dianying'
      }, {
        title: '图书',
        type: 'book',
        icon: 'icon-dushu'
      }, {
        title: '音乐',
        type: 'music',
        icon: 'icon-yinle'
      }]
    }
  }

  handleActiveNav (tags) {
    if (this.props.onClickNav) {
      this.props.onClickNav(tags)
    }
  }

  render () {
    let navLists = this.state.navLists
    return (
      <div className='nav-block'>
        {navLists.map((navitem, i) => {
          return (
            <NavItem
              navitem={navitem}
              key={i}
              index={i}
              tags={this.props.tags}
              onClickNav={this.handleActiveNav.bind(this)} />
          )
        })}
      </div>
    )
  }
}
