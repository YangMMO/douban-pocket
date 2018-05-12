import React, { Component, PropTypes } from 'react'
import MenuNav from '../components/MenuNav'
import { Fetch } from '../Jsonp/jsonp'
import { connect } from 'react-redux'
import { changeTags, changeLists, changeContent, changeLoadNum } from '../reducers/App'

class MenuNavContainer extends Component {
  componentWillMount () {
    this._handleAcitveNav()
  }

  _handleAcitveNav (tags) {
    switch (tags) {
      case 'movie':
        this.handlePullMovie(tags)
        break
      case 'book':
        this.handlePullBook(tags)
        break
      case 'music':
        this.handlePullMusic(tags)
        break
      default:
        this.handlePullMovie('movie')
    }
  }

  handlePullMovie (tags) {
    let self = this
    Fetch.movie().then(json => {
      self.props.changeLists(json)
      self.props.onchangeTags(tags)
      self.props.changeLoadNum(1)
    })
      .catch(function (ex) {
        self.props.changeContent()
      })
  }

  handlePullBook (tags) {
    let self = this
    Fetch.book().then(json => {
      self.props.changeLists(json)
      self.props.onchangeTags(tags)
      self.props.changeLoadNum(1)
    })
      .catch(function (ex) {
        self.props.changeContent()
      })
  }

  handlePullMusic (tags) {
    let self = this
    Fetch.music().then(json => {
      self.props.changeLists(json)
      self.props.onchangeTags(tags)
      self.props.changeLoadNum(1)
    })
      .catch(function (ex) {
        self.props.changeContent()
      })
  }

  render () {
    return (
      <MenuNav tags={this.props.tags} onClickNav={this._handleAcitveNav.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    lists: state.lists,
    content: state.content
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
)(MenuNavContainer)
