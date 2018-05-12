import React, { Component } from 'react'

export default class BookItem extends Component {
  constructor () {
    super()
    this.state = {
      listHeight: 0,
      imageSize: 0
    }
  }

  componentDidMount () {
    this._updateSize()
  }

  _updateSize () {
    this.setState({
      listHeight: document.documentElement.clientHeight - 45,
      imageSize: document.documentElement.clientWidth
    })
  }

  render () {
    return (
      <div className='container-item' style={{ height: this.state.listHeight}}>
        <div className='main-image' style={{ height: this.state.imageSize, width: this.state.imageSize, backgroundImage: `url(${this.props.item.images.large})` }} />
        <div className='main-container app-pad'>
          <div className='main-block'>
            <div className='main-title'>{ this.props.item.title }</div>
            <div className='main-original'>{ this.props.item.subtitle }</div>
            <div className='main-average'>{ this.props.item.rating.average }</div>
            <div className='main-msg'>价格：{ this.props.item.price }</div>
            <div className='main-msg'>日期：{ this.props.item.pubdate }</div>
            <div className='item-tags main-msg'>标签：{ this.props.item.tags.map((item, i) => <span className='item-tag' key={i}>{ item.name }</span>) }</div>
          </div>
          <div className='main-block'>
            <div className='main-msg'>页数：{ this.props.item.pages }</div>
            <div className='main-msg'>出版社：{ this.props.item.publisher }</div>
            <div className='main-msg'>作者：</div>
            <ul className='main-msg-block'>
              { this.props.item.translator.map((item, i) => <li key={i}><h4>{ item }</h4></li>) }
            </ul>
          </div>
          <div className='main-block'>
            <div className='main-msg'>序言：</div>
            <div className='main-info'>{ this.props.item.catalog ? this.props.item.catalog.split('\n').map((item, i) => <p key={i}>{ item }</p>) : '无'}</div>
            <div className='main-msg'>简介：</div>
            <p className='main-info'>{ this.props.item.summary }</p>
          </div>
        </div>
      </div>
    )
  }
}
