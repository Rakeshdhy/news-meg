import React from 'react'
import NewsImg from '../assets/News.jpg'
const NewsItem = ({title, description, url, src}) => {


  return (
    <>
      <div className="col-lg-3 mb-3">
      <div className="card" >
  <img src={src?src:NewsImg} className="card-img-top" alt="..." style={{height:"200px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0, 45)}</h5>
    <p className="card-text">{description?description.slice(0, 90): "S&P 500 gains for an eighth straight day, builds on longest win streak in 2"}</p>

    <a href={url} className="btn btn-primary" target='_blank'>Read More</a>
  </div>
</div>
      </div>

    </>
  )
}

export default NewsItem
