import Head from 'next/head'

import { PostCard, PostWidget, Categories } from '../components'

// demo list of our posts before we fetch data from graphQL
const posts = [
  {
    title: 'React Testing',
    excerpt: 'Learn React Testing',
  },
  {
    title: 'React with Tailwind',
    excerpt: 'Learn React with Tailwind',
  },
]

export default function Home() {
  return (
    // margin x-auto, padding on horizontal access = 10; margin bottom = 8;
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
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
