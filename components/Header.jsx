import React, { useState, useEffect } from 'react'

import { getCategories } from '../services'

import Link from 'next/link'

const Header = () => {
  const [categories, setCategories] = useState([])

  // dependency array is empty which means we are only calling it the start
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-point text-4xl font-bold text-white">
              {' '}
              GraphCMS
            </span>
          </Link>
        </div>
        {/* Use contents to create fantom container so its only appearing on the device that we want */}
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`post/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
