import React, { Component } from 'react'
import InfoItem from './InfoItem'

export default class MovieItem extends Component {
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
            <div className='main-original'>{ this.props.item.original_title }</div>
            <div className='main-average'>{ this.props.item.rating.average }</div>
            <div className='main-msg'>上映时间：{ this.props.item.year }</div>
            <div className='item-tags main-msg'>标签：{ this.props.item.genres.map((item, i) => <span className='item-tag' key={i}>{ item }</span>) }</div>
          </div>
          <div className='main-block'>
            <div className='main-msg'>导演：</div>
            <ul>
              { this.props.item.directors.map((item, i) => <InfoItem item={item} key={i} />) }
            </ul>
            <div className='main-msg'>演员：</div>
            <ul>
              { this.props.item.casts.map((item, i) => <InfoItem item={item} key={i} />) }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
