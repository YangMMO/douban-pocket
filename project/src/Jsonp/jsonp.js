import fetchJsonp from 'fetch-jsonp'

export const Fetch = {
  /**
     * movie
     */
  movie: function (num) {
    let start = num || 1
    return fetchJsonp(`https://api.douban.com/v2/movie/top250?count=${start === 1 ? 20 : start * 20}`).then(response => response.json())
  },
  movieSearch: function (search, num) {
    let start = num || 1
    return fetchJsonp(`https://api.douban.com/v2/movie/search?q=${search}&count=${start === 1 ? 20 : start * 20}`).then(response => response.json())
  },
  /**
     * book
     */
  book: function (num) {
    let start = num || 1
    return fetchJsonp(`https://api.douban.com/v2/book/search?q=javascript&count=${start === 1 ? 20 : start * 20}`).then(response => response.json())
  },
  bookSearch: function (search, num) {
    let start = num || 1
    return fetchJsonp(`https://api.douban.com/v2/book/search?q=${search}&count=${start === 1 ? 20 : start * 20}`).then(response => response.json())
  },
  /**
     * music
     */
  music: function (num) {
    let start = num || 1
    return fetchJsonp(`https://api.douban.com/v2/music/search?tag=pop&count=${start === 1 ? 20 : start * 20}`).then(response => response.json())
  },
  musicSearch: function (search, num) {
    let start = num || 1
    return fetchJsonp(`https://api.douban.com/v2/music/search?q=${search}&count=${start === 1 ? 20 : start * 20}`).then(response => response.json())
  }
}
