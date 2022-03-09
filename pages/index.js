import Head from 'next/head'

// demo list of our posts before we fetch data from graphQL
const posts = [
  {
    title:'React Testing',
    excerpt : 'Learn React Testing'
  },
  {
    title:'React with Tailwind',
    excerpt : 'Learn React with Tailwind'
  }
]

export default function Home() {
  return (
    // margin x-auto, padding on horizontal access = 10; margin bottom = 8;
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
    {posts.map((post, index) => (
      <div>
      {post.title}
      {post.excerpt}  
      </div>
    ))}
        </div>
      </Head>
    </div>
  )
}
