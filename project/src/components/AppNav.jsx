import React, { Component, PropTypes } from 'react'

export default class AppNav extends Component {
  constructor () {
    super()
    this.state = {
      search: '',
      recommend: {
        movie: '电影、影人、影院、电视剧',
        book: '书名、作者、ISBN',
        music: '唱片名、表演者、条码、ISRC'
      },
      githubClass: ''
    }
  }

  handleSearchChange (event) {
    this.setState({ search: event.target.value })
  }

  handleLoadPlaceholder () {
    switch (this.props.tags) {
      case 'movie': return this.state.recommend.movie; break
      case 'book': return this.state.recommend.book; break
      case 'music': return this.state.recommend.music; break
    }
  }

  handleSearchContent () {
    if (!this.state.search) {
      return
    }

    let searchStr = this.state.search
    searchStr = searchStr.replace(/\s+/g, ' ').replace(/(\b.*\b)/, '$1')

    if (this.props.onClickSearch) {
      this.props.onClickSearch(this.props.tags, searchStr)
    }
  }

  handleToggleActive () {
    if (this.props.onClickActive) {
      this.props.onClickActive()
    }
  }

  onClickGitHub () {
    this.setState({ githubClass: this.state.githubClass === 'act' ? '' : 'act'})
  }

  render () {
    return (
      <div className='app-nav app-line'>
        <div className='app-pad app-name' data-active={this.props.active}>
          <h1 className='app-title'>口袋豆瓣</h1>
          <div className='app-github' >
            <span className={`iconfont ft-s nav-icon ${this.state.githubClass}`}
              ref={(github) => this.github = github}
              onClick={this.onClickGitHub.bind(this)} />
            <h1>
              <a href='https://github.com/yzk114360/douban'>GitHub: MMO</a>
            </h1>
          </div>
        </div>
        <div className='app-pad item-title' data-active={this.props.active === 'block' ? 'none' : 'display-block'}>
          <h1 className='app-title'>
            {/* { this.props.item.title } */}{/* 顶部title，为了美观统一为“内容详情” */}
                        内容详情
          </h1>
          <div className='iconfont ft-s nav-icon' onClick={this.handleToggleActive.bind(this)}><span>返回</span></div>
        </div>
        <div className='app-search app-pad' data-active={this.props.active}>
          <input
            type='text'
            placeholder={this.handleLoadPlaceholder()}
            onChange={this.handleSearchChange.bind(this)}
            value={this.state.search} />
          <div
            className='search-btn iconfont'
            onClick={this.handleSearchContent.bind(this)}>
            <span>搜索</span>
          </div>
        </div>
      </div>
    )
  }
}
