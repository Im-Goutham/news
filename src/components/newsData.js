import React, { Component } from 'react';
import { Container,Image,Header } from 'semantic-ui-react'


class NewsData extends Component {

	constructor(props, context){
    super(props, context);
    this.state = {
        news: props.news
                 }

  }

	render(){
		 console.log("this.props.news is .. "+JSON.stringify(this.props.news));
		 let {news} = this.props;
		 if(!news.articles){
			 return (
					 <h1>Loading..</h1>
			)
		 }
		 else {
			 return (
						 <Container>
						   {
								   news.articles.map((article,key)=>{
										   return  <div key={key}>
							 										<Header as='h3'>{article.title}</Header>
							 										<Image src={article.urlToImage} fluid />
							 										<Header as='h4'>{article.description}</Header>
							 										<Header as='h5'>{article.author}</Header>
							 										<Header as='h5'>2017-11-05T15:00:00Z</Header>
							 								</div>
									 })
							 }
							</Container>
					);
		 }


	}
}


export default NewsData;
