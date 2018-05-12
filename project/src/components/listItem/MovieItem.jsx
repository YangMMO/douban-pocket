import React, { Component, PropTypes } from 'react'

export default class MovieItem extends Component {
  handleActiveItem () {
    if (this.props.onClickActiveItem) {
      this.props.onClickActiveItem(this.props.content)
    }
  }
  render () {
    return (
      <li className='content-block' onClick={this.handleActiveItem.bind(this)}>
        <div className='content-item'>
          <div className='item-image'>
            <div style={{ backgroundImage: 'url(' + this.props.content.images.medium + ')' }} />
          </div>
          <div className='item-detail'>
            <h3 className='item-title'>
              { this.props.content.title } <span className='movie-year'>{ this.props.content.year }</span>
            </h3>
            <div className='item-average'>评分: <span className='iconfont icon-xingxing' />{ this.props.content.rating.average }</div>
            <h4 className='item-name'>{ this.props.content.casts.map(item => `${item.name} `) }</h4>
            <h4 className='item-tags'>{ this.props.content.genres.map((item, i) => <span className='item-tag' key={i}>{ item }</span>) }</h4>
          </div>
        </div>
      </li>
    )
  }
}
