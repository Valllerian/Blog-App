import Head from 'next/head'

import { PostCard, PostWidget, Categories } from '../components'
import {getPosts} from '../services'

// we dont need our hardcoded posts => NextJs to fetch it => creating new async function
export default function Home({posts}) {
  return (
    // margin x-auto, padding on horizontal access = 10; margin bottom = 8;
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>

  )
}
 

// fetching data using getStaticProps in NextJs
export async function getStaticProps() {
  const posts= (await getPosts()) || [];
  return {
    props: {posts}
  }
}