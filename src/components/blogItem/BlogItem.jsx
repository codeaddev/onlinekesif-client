import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../components/Navbar/logo.svg"

const BlogItem = ({item,source}) => {

  //console.log(item)
  //console.log(item?._embedded?.['wp:featuredmedia']?.[0]?.source_url)
  //?.media_details?.thumbnail?.source_url
  
  return (
    
    <a
    href={`${item.link}`}
    target="_blank"
    style={{backgroundImage:`url(${source})`}}
    className={`blog-card ${!source&&"empty"}`}>
        <p className={`${!source&&"empty"}`}>{item?.title?.rendered}</p>
        {<img src={source?source:logo} className="post-img" />}
        </a>
  
  )
}

export default BlogItem