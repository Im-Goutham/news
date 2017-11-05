import {getNews,getNewsSources} from '../lib/newsServices'


const initState = {
  news: [],
  newsSourceList:[],
  sourceName:{id: "abc-news-au",name: "ABC News (AU)",description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",url: "http://www.abc.net.au/news"},
  newsType: ''
}


export const NEWS_LOAD = 'NEWS_LOAD'
export const SOURCE_LOAD = 'SOURCE_LOAD'
const UPDATE_NEWS_TYPE = 'UPDATE_NEWS_TYPE'
const UPDATE_SOURCE_NAME = 'UPDATE_SOURCE_NAME'

export const loadNews = (news) => ({type: NEWS_LOAD, payload: news})
export const loadNewsSources = (news) => ({type: SOURCE_LOAD, payload: news})
export const updateNewsType = (val) => ({type:UPDATE_NEWS_TYPE, payload: val})
export const updateSourceName = (val) => ({type:UPDATE_SOURCE_NAME, payload: val})

export const fetchNews = (id) => {
  return (dispatch) => {
    getNews(id)
      .then(news => dispatch(loadNews(news)))
  }
}

export const fetchNewsSources = () => {
  return (dispatch) => {
    getNewsSources()
      .then(news => dispatch(loadNewsSources(news)))
  }
}



export default (state = initState, action) => {
  switch (action.type) {
    case NEWS_LOAD:
      return {...state, news: action.payload}
    case UPDATE_NEWS_TYPE:
      return {...state, newsType: action.payload}
    case SOURCE_LOAD:
      return {...state, newsSourceList: action.payload}
    case UPDATE_SOURCE_NAME:
      return {...state, sourceName: action.payload}
    default:
      return state
  }
}
