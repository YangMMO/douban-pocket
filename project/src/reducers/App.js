import { fetchMovie } from '../Jsonp/jsonp'

const CHANGE_TAGS = 'CHANGE_TAGS'
const CHANGE_LISTS = 'CHANGE_LISTS'
const CHANGE_ITEM = 'CHANGE_ITEM'
const CHANGE_CONTENT = 'CHANGE_CONTENT'
const CHANGE_LOADNUM = 'CHANGE_LOADNUM'
const CHANGE_SEARCH = 'CHANGE_SEARCH'

export default function (state, action) {
  if (!state) {
    return {
      content: '内容加载中',
      tags: '',
      lists: {},
      item: {
        itemData: {},
        active: 'block'
      },
      num: 1,
      search: '',
      searchState: false
    }
  }

  switch (action.type) {
    case CHANGE_TAGS:
      return {
        tags: action.tags,
        lists: state.lists,
        item: state.item,
        num: state.num,
        search: state.search,
        searchState: state.searchState
      }
      break
    case CHANGE_LISTS:
      return {
        tags: state.tags,
        lists: action.lists,
        item: state.item,
        num: state.num,
        search: state.search,
        searchState: state.searchState
      }
      break
    case CHANGE_ITEM:
      return {
        tags: state.tags,
        lists: state.lists,
        item: action.item,
        num: state.num,
        search: state.search,
        searchState: state.searchState
      }
      break
    case CHANGE_LOADNUM:
      return {
        tags: state.tags,
        lists: state.lists,
        item: state.item,
        num: action.num,
        search: state.search,
        searchState: state.searchState
      }
      break
    case CHANGE_SEARCH:
      return {
        tags: state.tags,
        lists: state.lists,
        item: state.item,
        num: state.num,
        search: action.obj.str,
        searchState: action.obj.boolean
      }
      break
    case CHANGE_CONTENT:
      return {
        content: '加载...',
        tags: state.tags,
        lists: state.lists,
        item: state.item,
        num: state.num,
        search: state.search,
        searchState: state.searchState
      }
      break
    default:
      return state
  }
}

export const changeTags = (tags) => {
  return { type: CHANGE_TAGS, tags }
}

export const changeLists = (lists) => {
  return { type: CHANGE_LISTS, lists }
}

export const changeItem = (item) => {
  return { type: CHANGE_ITEM, item }
}

export const changeContent = (str) => {
  return { type: CHANGE_CONTENT, str}
}

export const changeLoadNum = (num) => {
  return { type: CHANGE_LOADNUM, num}
}

export const changeSearch = (obj) => {
  return { type: CHANGE_SEARCH, obj}
}
