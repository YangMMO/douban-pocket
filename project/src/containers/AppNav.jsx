import React, { Component, PropTypes } from 'react'
import AppNav from '../components/AppNav'
import { Fetch } from '../Jsonp/jsonp'
import { connect } from 'react-redux'
import { changeTags, changeLists, changeItem, changeSearch } from '../reducers/App'

class AppNavContainer extends Component {
  handlePullSearch (type, tags, search) {
    Fetch[type](search).then(json => {
      this.props.changeSearch({ str: search, boolean: true })
      this.props.changeLists(json)
      this.props.onchangeTags(tags)
    })
  }

  handleLoadItemData () {
    this.props.item.itemData ? this.props.item.itemData : ''
  }

  onchangeSearch (tags, search) {
    switch (tags) {
      case 'movie':
        return this.handlePullSearch('movieSearch', tags, search)
        break
      case 'book':
        return this.handlePullSearch('bookSearch', tags, search)
        break
      case 'music':
        return this.handlePullSearch('musicSearch', tags, search)
        break
    }
  }

  onClickActive () {
    if (this.props.changeItem) {
      this.props.changeItem({ active: 'block' })
    }
  }

  render () {
    return (
      <AppNav
        onClickSearch={this.onchangeSearch.bind(this)}
        onClickActive={this.onClickActive.bind(this)}
        tags={this.props.tags}
        active={this.props.active}
        item={this.handleLoadItemData.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    lists: state.lists,
    item: state.item,
    search: state.search,
    searchState: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLists: (lists) => {
      dispatch(changeLists(lists))
    },
    onchangeTags: (tags) => {
      dispatch(changeTags(tags))
    },
    changeItem: (item) => {
      dispatch(changeItem(item))
    },
    changeSearch: (obj) => {
      dispatch(changeSearch(obj))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavContainer)
