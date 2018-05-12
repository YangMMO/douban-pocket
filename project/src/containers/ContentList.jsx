import React, { Component, PropTypes } from 'react'
import ContentList from '../components/ContentList'
import { connect } from 'react-redux'
import { changeLists, changeItem, changeContent, changeLoadNum } from '../reducers/App'
import { Fetch } from '../Jsonp/jsonp'

class ContentListContainer extends Component {
  // pull
  handlePull (type) {
    let self = this
    Fetch[type]().then(json => {
      self.props.changeLists(json)
    })
      .catch(function (ex) {
        self.props.changeContent()
      })
  }

  // load
  handleLoad (type) {
    let self = this
    let num = this.props.num
    num += 1
    Fetch[type](num).then(json => {
      self.props.changeLoadNum(num)
      self.props.changeLists(json)
    })
      .catch(function (ex) {
        self.props.changeContent()
      })
  }

  // search load
  handleLoadSearch (type) {
    let self = this
    let num = this.props.num
    num += 1
    Fetch[type](this.props.search, num).then(json => {
      self.props.changeLoadNum(num)
      self.props.changeLists(json)
    })
      .catch(function (ex) {
        self.props.changeContent()
      })
  }

  // handle Pull
  handlePullRefresh (tags) {
    switch (tags) {
      case 'movie':
        this.handlePull('movie')
        break
      case 'book':
        this.handlePull('book')
        break
      case 'music':
        this.handlePull('music')
        break
    }
  }

  // handle Load
  handlePullLoad (tags) {
    // 搜索情况

    if (this.props.searchState) {
      switch (tags) {
        case 'movie':
          this.handleLoadSearch('movieSearch')
          break
        case 'book':
          this.handleLoadSearch('bookSearch')
          break
        case 'music':
          this.handleLoadSearch('musicSearch')
          break
      }
      return
    }
    // 无搜索情况下
    switch (tags) {
      case 'movie':
        this.handleLoad('movie')
        break
      case 'book':
        this.handleLoad('book')
        break
      case 'music':
        this.handleLoad('music')
        break
    }
  }

  onClickActiveItem (data) {
    if (data !== this.props.item) {
      this.props.changeItem({ itemData: data, active: 'none' })
    }
  }

  render () {
    return (
      <ContentList
        tags={this.props.tags}
        lists={this.props.lists}
        loadText={this.props.content}
        onClickActiveItem={this.onClickActiveItem.bind(this)}
        handleRefresh={this.handlePullRefresh.bind(this)}
        handleLoad={this.handlePullLoad.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    tags: state.tags,
    content: state.content,
    item: state.item,
    num: state.num,
    search: state.search,
    searchState: state.searchState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLists: (lists) => {
      dispatch(changeLists(lists))
    },
    changeItem: (item) => {
      dispatch(changeItem(item))
    },
    changeContent: (str) => {
      dispatch(changeContent(str))
    },
    changeLoadNum: (num) => {
      dispatch(changeLoadNum(num))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentListContainer)
