import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchNews,fetchNewsSources} from './reducers/news';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import NewsData from './components/newsData';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     visible: false
   };
 }
  componentDidMount() {
    this.props.fetchNews();
    this.props.fetchNewsSources();
  }

 componentWillReceiveProps(nextProps){
   let {news} = nextProps;
   this.setState({news});
 }


  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    console.log("newsSourceList is .. "+JSON.stringify(this.props.newsSourceList));
    let {newsSourceList} = this.props;
    const { visible } = this.state
    return (
      <div>
          <Button onClick={this.toggleVisibility}>View Sites</Button>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='push' width='wide' visible={visible} icon='labeled' vertical inverted>
              {
                 (newsSourceList.sources)?(
                     newsSourceList.sources.map((source,key)=>{
                         return <Menu.Item name={source.id}>
                            {source.name}
                          </Menu.Item>
                     })
                 ):(null)
              }
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <NewsData news={this.props.news}/>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
    );
  }
}

export default connect(
  (state) => ({news: state.news.news,newsSourceList: state.news.newsSourceList}),
  {fetchNews, fetchNewsSources}
)(App)
