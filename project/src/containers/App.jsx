import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuNav from './MenuNav'
import AppNav from './AppNav'
import ContentList from './ContentList'
import MovieItem from '../components/renderItem/MovieItem'
import BookItem from '../components/renderItem/BookItem'
import MusicItem from '../components/renderItem/MusicItem'

class App extends Component {
  handleLoadItem () {
    if (this.props.item.active === 'none') {
      switch (this.props.tags) {
        case 'movie': return <MovieItem item={this.props.item.itemData} />; break
        case 'book': return <BookItem item={this.props.item.itemData} />; break
        case 'music': return <MusicItem item={this.props.item.itemData} />; break
      }
    }
  }

  render () {
    return (
      <div className='app'>
        <AppNav active={this.props.item.active} />
        <ContentList />
        <MenuNav />
        { this.handleLoadItem() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
    tags: state.tags
  }
}

export default connect(
  mapStateToProps
)(App)
