import React, { Component, PropTypes } from 'react'

export default class MusicItem extends Component {
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
            <div style={{ backgroundImage: 'url(' + this.props.content.image + ')' }} />
          </div>
          <div className='item-detail'>
            <h3 className='item-title'>{ this.props.content.title }</h3>
            <div className='item-average'>评分: <span className='iconfont icon-xingxing' />{this.props.content.rating.average}</div>
            <h4 className='item-name'>
                            作者: { this.props.content.author.length > 1 ? this.props.content.author.map(item => `${item.name}, `) : this.props.content.author.map(item => item.name) }
            </h4>
            <h4>时间：{ this.props.content.attrs.pubdate }</h4>
          </div>
        </div>
      </li>
    )
  }
}
