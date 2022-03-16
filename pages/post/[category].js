import React from 'react'

import { useRouter } from 'next/router'

import { getPosts, getPostDetails } from '../../services'



import {
    PostDetail,
    Categories,
    PostWidget,
    Author,
    Comments,
    CommentsForm,
    Loader
  } from '../../components'

  

const CategoryDetails = ({ category }) => {
    const router =useRouter();
    if(router.isFallback){
      return <Loader/>
    }
    
    return (
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CategoryDetails
  
  // Fetch data at build time
  export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)
    return {
      props: {
        category: data,
      },
    }
  }
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const posts = await getPosts()
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    }
  }
  