import React from 'react'
import "../Blogs.css"



const BlogDetails = ({descriptionData}) => {
  return (
    <div className='blog-detail-container'>
        <div className='detail-section-1'>
            <div><img className='detail-img' src={descriptionData?.detailImage} alt="" /></div>
        </div>
        <div className='detail-section-2'>
            <div className='blog-detail-title'>{descriptionData?.blogTitle}</div>

            <div className='blog-desc'>{descriptionData?.description}</div>
        </div>

    

    </div>
  )
}

export default BlogDetails
