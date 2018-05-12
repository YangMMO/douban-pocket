import React, { Component, PropTypes } from 'react'

export default class BookItem extends Component {
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
            <h3 className='item-name'>
              {this.props.content.title}{this.props.content.subtitle ? `: ${this.props.content.subtitle}` : '' }
            </h3>
            <h4 className='book-year'>{this.props.content.pubdate}</h4>
            <div className='item-average'>评分: <span className='iconfont icon-xingxing' />{this.props.content.rating.average}</div>
            <h4 className='item-name'>
                            作者: { this.props.content.author.map(item => item) }
              { this.props.content.translator ? this.props.content.translator.map(item => `/${item}`) : '' }</h4>
            <h4 className='item-tags'>{ this.props.content.tags.map((item, i) => <span className='item-tag' key={i}>{ item.name }</span>) }</h4>
          </div>
        </div>
      </li>
    )
  }
}
