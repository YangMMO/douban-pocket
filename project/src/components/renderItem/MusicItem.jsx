import React, { Component } from 'react'

export default class MusicItem extends Component {
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
        <div className='main-image' style={{ height: this.state.imageSize, width: this.state.imageSize, backgroundImage: `url(${this.props.item.image})` }} />
        <div className='main-container app-pad'>
          <div className='main-block'>
            <div className='main-title'>{ this.props.item.title }</div>
            <div className='main-original'>
              { this.props.item.attrs.pubdate.map(item => item) }&nbsp;
              { this.props.item.attrs.media.map(item => item) }
            </div>
            <div className='main-average'>{ this.props.item.rating.average }</div>
          </div>
          <div className='main-block'>
            <div className='main-msg'>歌手：{ this.props.item.author.map(item => item.name) }</div>
            <div className='main-msg'>类型：{ this.props.item.attrs.version.map(item => item) }</div>
            <div className='main-msg'>唱片数：{ this.props.item.attrs.discs ? this.props.item.attrs.discs.map(item => item) : '无' }</div>
            <div className='main-msg'>发行商：{ this.props.item.attrs.publisher.map(item => item) }</div>
            <div className='item-tags main-msg'>标签：{ this.props.item.tags.map((item, i) => <span className='item-tag' key={i}>{ item.name }</span>) }</div>
            <div className='main-msg'>内容：</div>
            <div className='main-info'>
              { this.props.item.attrs.tracks.map(item => item.split('\n').map(data => <p>{ data }</p>)) }
            </div>

          </div>
        </div>
      </div>
    )
  }
}
