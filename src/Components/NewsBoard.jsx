import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category, country}) => {

    const [articles, setArticles] = useState([]);
    
    
    useEffect(()=>{
        let url =   `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
    },[category, country]);



  return (
    <>
    <div className="container">
    <div className="row">
    <div className='col-lg-12 text-center mt-3 mb-4 border-bottom'> <h2>News Articles - <span className='text-capitalize'>{category} </span></h2></div>

        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description}  src={news.urlToImage} url={news.url}  />
          
        })}

    



    </div>
    </div>
      
    </>
  )
}

export default NewsBoard
