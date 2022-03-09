import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg pd-0 lg:p-8 pb-12 mb-8'>
     <div className='relative overflow-hidden shadow-md pd-80 bd-6'>
       <img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 q-full object-cocver shadow-lg-rounded-t-lg lg:rounded-lg"/>
       </div>
    </div>
  )
}

export default PostCard
