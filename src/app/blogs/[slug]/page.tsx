import BlogDetailPage from "@/components/blog/blog-detail-page";

// Adjusted for asynchronous handling of params
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  // Await params because it is now a Promise
  const { slug } = await params;

  if (!slug) {
    return {}; // Handle case where slug is not provided
  }

  // Fetch the blog data dynamically
  const res = await fetch(`/api/v1/blog/slug/${slug}`);
  
  if (!res.ok) {
    return {}; // Handle errors gracefully if the fetch fails
  }

  const data = await res.json();
  const blog = data.data;

  return {
    title: `${blog.title} - ${blog.author.name}`,
    description: blog.content.substring(0, 160),
    keywords: blog.tags.join(', '),
    author: blog.author.name,
    creator: 'TheCodeSquad Team',
    publisher: 'TheCodeSquad',
    robots: { index: true, follow: true },
    icons: '/icons/logo.png',
    images: [
      {
        url: blog.thumbnailUrl,
        width: 1200,
        height: 630,
        alt: blog.title,
      },
    ],
    metadataBase: new URL('https://www.thecodesquad.com/'),
    openGraph: {
      title: `${blog.title} - ${blog.author.name}`,
      description: blog.content.substring(0, 160),
      images: [
        {
          url: blog.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      url: `https://www.thecodesquad.com/blog/${blog.slug}`,
      type: 'article',
      'og:image:alt': blog.title,
    },
    twitter: {
      site: '@thecodesquad',
      title: `${blog.title} - ${blog.author.name}`,
      description: blog.content.substring(0, 160),
      images: [blog.thumbnailUrl],
    },
  };
}

const page = () => {
  return <BlogDetailPage />;
};

export default page;
