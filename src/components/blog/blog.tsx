/* eslint-disable @next/next/no-img-element */
'use client';

import Pills from '@/components/shared/pills';
import SecondaryButton from '@/components/shared/secondary-button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Blog {
  _id: string; 
  title: string;
  content: string;
  thumbnailUrl: string;
  author: {
    _id: string; 
    name: string;
    email: string;
  };
  createdAt: string; 
  updatedAt: string; 
  slug: string; 
  category: string;
  tags: string[]; 
  status: string; 
  publishDate: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/published-blogs-au`
        );
        const data = await res.json();
        setBlogs(data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateContent = (content: string, length: number = 150) => {
    // Remove HTML tags and inline styles, keeping only plain text
    const textContent = content.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
    const truncatedContent = textContent.length > length ? textContent.slice(0, length) + '...' : textContent;

    return truncatedContent;
  };

  return (
    <div className="p-6">
      <div className="bg-[url('/images/grid.svg'),url('/images/gradient1.avif'),url('/images/gradient2.avif'),url('/images/gradient3.avif'),url('/images/gradient4.avif'),url('/images/gradient5.avif')] bg-[#f5f6f9] bg-cover bg-center flex flex-col items-start border border-[#d8d8db] rounded-3xl px-4 pt-30 md:pt-36 xl:pt-52 pb-5 md:pb-0 min-h-[calc(100vh-3rem)]">
        <div className="mt-10 md:px-16 mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-[1.6rem] md:text-4xl lg:text-5xl text-primary mb-4">
            Read Our Expert <br className="md:hidden" />
            <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-8 py-1 rounded-2xl border border-secondary leading-12 xl:leading-24">
              Tech Blog
            </span>
          </h1>
          <p className="px-5 text-base md:text-lg mb-6 mt-6 lg:w-2/3 xl:w-1/2 mx-auto text-gray-500">
            Stay ahead in the tech world with expert insights, industry trends,
            and practical guides on web development, startup growth, and digital
            marketing.
          </p>
          <p className="px-2 text-sm mb-12 mt-2 lg:w-2/3 xl:w-1/2 mx-auto text-gray-500">
            Join us as we decode the future of technology—one blog at a time!
          </p>
        </div>
      </div>

      <div className="max-w-[120rem] mx-auto sm:px-6 lg:px-8 mt-10 md:mt-20">
        <Pills>Our Blogs</Pills>

        {loading ? (
          <div className="flex flex-col md:flex-row md:flex-wrap gap-x-4 gap-y-8 mt-10 md:mt-20 justify-between">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="lg:w-[49%] xl:w-[32%] bg-neutral-100 rounded-2xl bg-[url('/images/bg-img-1.webp')] bg-cover bg-center shadow-md"
              >
                <div
                  role="status"
                  className="h-full bg-white/75 px-4 py-8 rounded-2xl animate-pulse"
                >
                  <div className="h-60 mb-4 bg-gray-300 rounded-2xl"></div>
                  <div className="h-4 bg-gray-300 rounded-full mb-4 w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded-full mb-2 w-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full mb-2 w-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full mb-2 w-5/6"></div>
                  <div className="mt-4 h-3 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="mt-2 h-3 bg-gray-200 rounded-full w-1/3"></div>
                  <div className="mt-6 h-10 bg-gray-300 rounded-md w-32"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:flex-wrap lg:gap-x-4 xl:gap-x-6 gap-y-8 mt-10 md:mt-20">
            {blogs?.map((blog) => (
              <div
                key={blog._id}
                className="lg:w-[49%] xl:w-[32%] bg-neutral-100 rounded-2xl bg-[url('/images/bg-img-1.webp')] bg-cover bg-center shadow-md"
              >
                <div className="bg-white/75 h-full px-4 py-8 rounded-2xl">
                  <div>
                    {blog.thumbnailUrl?.startsWith('http') ? (
                      <img
                        src={blog.thumbnailUrl}
                        alt="blog thumbnailUrl"
                        className="rounded-2xl w-full h-60 object-cover"
                      />
                    ) : (
                      <Image
                        src={blog.thumbnailUrl}
                        alt="blog thumbnailUrl"
                        width={500}
                        height={300}
                        className="rounded-2xl w-full h-60 object-cover"
                      />
                    )}
                  </div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="text-xl md:text-2xl lg:text-3xl text-secondary mt-5">
                      {blog.title}
                    </div>
                  </Link>
                  <div className="mt-4 text-[#909090] text-sm md:text-base">
                  {truncateContent(blog.content)}
                </div>
                  <div className="mt-4 text-[#909090] text-xs">
                    Posted by : <strong>{blog.author.name}</strong>
                  </div>
                  <div className="mt-4 text-[#909090] text-xs">
                    Posted On :{' '}
                    <strong>
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </strong>
                  </div>
                  <div className="mt-4">
                    <Link href={`/blogs/${blog.slug}`}>
                      <SecondaryButton>Learn More</SecondaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
