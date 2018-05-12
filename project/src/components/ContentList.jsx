import React, { Component, PropTypes } from 'react'
import MovieItem from './listItem//MovieItem'
import BookItem from './listItem//BookItem'
import MusicItem from './listItem//MusicItem'
import LoadContent from './listItem//LoadContent'

export default class ContentList extends Component {
  constructor () {
    super()
    this.state = {
      listHeight: 0,
      listState: 5
    }
  }

  componentDidMount () {
    this._updateSize()

    this.listDom.addEventListener('scroll', () => {})
    this.block.addEventListener('scroll', () => {})
  }

  _handleLoadState () {
    if (this.block.scrollTop === 0 && this.listDom.scrollTop === 0 && this.state.listState === 5) {
      setTimeout(() => {
        this.setBlockScrollTop()
      }, 1000)
    }
  }

  _updateSize () {
    this.setState({ listHeight: document.documentElement.clientHeight - 138 })
  }

  setBlockScrollTop () {
    setTimeout(() => {
      this.block.scrollTop = 80
    }, 1000)
  }

  handleLoadText () {
    if (this.props.loadText === '内容加载中') {
      return (
        <LoadContent content={this.props.loadText} />
      )
    }
    return this.handleLoadList()
  }

  handleLoadList () {
    switch (this.props.tags) {
      case 'movie':
        if (this.props.lists.subjects) {
          return this.props.lists.subjects.map((item, i) => <MovieItem content={item} key={i} tags={this.props.tags} onClickActiveItem={this.handleActiveItem.bind(this)} />)
        }
        break
      case 'book':
        if (this.props.lists.books) {
          return this.props.lists.books.map((item, i) => <BookItem content={item} key={i} tags={this.props.tags} onClickActiveItem={this.handleActiveItem.bind(this)} />)
        }
        break
      case 'music':
        if (this.props.lists.musics) {
          return this.props.lists.musics.map((item, i) => <MusicItem content={item} key={i} tags={this.props.tags} onClickActiveItem={this.handleActiveItem.bind(this)} />)
        }
        break
      default:
    }
  }

  handleActiveItem (data) {
    if (this.props.onClickActiveItem) {
      this.props.onClickActiveItem(data)
    }
  }

  /**
     * listState 下拉状态
     * @param {any} state
     * @returns
     * @memberof ContentList
     */
  handleChangeState (state) {
    switch (state) {
      case 0: return '下拉刷新'; break
      case 1: return '正在刷新...'; break
      case 2: return '刷新成功'; break
      case 3: return '加载内容'; break
      case 4: return '加载中...'; break
      case 5: return '加载成功'; break
      case 6: return '获取失败 请检查网络'; break
    }
  }

  onTouchEndChangeState () {
    let scrollTop = this.block.scrollTop
    // 达到刷新标准
    if (scrollTop <= 29) {
      this.setState({ listState: 1})
      if (this.props.handleRefresh) {
        this.props.handleRefresh(this.props.tags)
        setTimeout(() => {
            this.setState({ listState: 2})
        }, 1500); 
      }
      setTimeout(() => {
        this.setBlockScrollTop()
      }, 1000); 
      return
    } else if (scrollTop >= 136) {
      this.setState({ listState: 4})
      if (this.props.handleLoad) {
        this.props.handleLoad(this.props.tags)
        setTimeout(() => {
            this.setState({ listState: 5})
        }, 1500); 
      }
      setTimeout(() => {
        this.setBlockScrollTop()
      }, 1000); 
      return
    }

    // 未达到刷新标准
    if (scrollTop <= 79) {
      this.setBlockScrollTop()
    } else if (scrollTop >= 81) {
      this.setBlockScrollTop()
    }
  }

  onTouchMoveChangeState () {
    let scrollTop = this.block.scrollTop
    // 触摸状态监测
    if (scrollTop <= 79) {
      this.setState({ listState: 0})
    } else if (scrollTop >= 81) {
      this.setState({ listState: 3})
    }
  }

  render () {
    return (
      <div
        className='content-lists'
        style={{ height: this.state.listHeight }}
        ref={(block) => this.block = block}
        onTouchMove={this.onTouchMoveChangeState.bind(this)}
        onTouchEnd={this.onTouchEndChangeState.bind(this)}>
        <div className='refresh-block' style={{ display: this.props.tags ? 'block' && this._handleLoadState() : 'none' }}>
          <span className='iconfont icon-jiaoyubeijing' />
          { this.handleChangeState(this.state.listState) }
        </div>

        <ul
          ref={(dom) => this.listDom = dom}
          style={{ height: this.state.listHeight }}>
          { this.handleLoadText() }
        </ul>

        <div className='loadMore-block' style={{ display: this.props.tags ? 'block' : 'none' }}>
          { this.handleChangeState(this.state.listState) }
        </div>
      </div>
    )
  }
}
