'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

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

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/slug/${slug}`
        );
        const data = await res.json();
        setBlog(data.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center border border-[#d8d8db] rounded-3xl px-4 pt-30 md:pt-20 xl:pt-52 pb-10 md:pb-10 min-h-[calc(100vh-3rem)]">
          {/* Skeleton Loader for Blog Detail Page */}
          <div className="space-y-6 w-full max-w-4xl">
            {/* Thumbnail Skeleton */}
            <div className="h-96 bg-gray-300 rounded-2xl animate-pulse"></div>
            
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            
            {/* Author and Date Skeleton */}
            <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            
            {/* Content Skeleton */}
            <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center border border-[#d8d8db] rounded-3xl px-4 pt-30 md:pt-36 xl:pt-52 pb-10 md:pb-10 min-h-[calc(100vh-3rem)]">
          Blog not found.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col items-start border border-[#d8d8db] rounded-3xl px-4 pt-30 md:pt-36 xl:pt-52 pb-10 md:pb-10 min-h-[calc(100vh-3rem)]">
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <img
              src={blog.thumbnailUrl}
              alt="Blog Thumbnail"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {blog.title}
          </h1>

          <div className="text-sm text-gray-500 mb-2">
            By <strong>{blog.author?.name}</strong> on{' '}
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>

          <div
            className="mt-8 text-base leading-relaxed text-gray-700 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
