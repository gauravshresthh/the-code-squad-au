import BlogPage from '@/components/blog/blog';

export async function generateMetadata() {
  return {
    title: 'TheCodeSquad Tech Blog | Latest Insights on Web Development and Digital Trends',
    description:
      'Stay ahead in the tech world with expert insights, industry trends, and practical guides on web development, startup growth, and digital marketing.',
    keywords: [
      'web development',
      'startup growth',
      'digital marketing',
      'tech blog',
      'software development',
      'technology trends',
    ],
    author: 'TheCodeSquad Team',
    publisher: 'TheCodeSquad',
    robots: { index: true, follow: true },
    icons: '/icons/logo.png',
    images: [
      {
        url: '/images/website-preview.jpeg',
        width: 1200,
        height: 630,
        alt: 'TheCodeSquad Website Preview',
      },
    ],
    metadataBase: new URL('https://www.thecodesquad.com/'),
    openGraph: {
      title: 'TheCodeSquad Tech Blog | Insights on Web Development & Digital Trends',
      description:
        'Stay ahead in the tech world with expert insights, industry trends, and practical guides on web development, startup growth, and digital marketing.',
      images: [
        {
          url: '/images/website-preview.jpeg',
          width: 1200,
          height: 630,
          alt: 'TheCodeSquad Website Preview',
        },
      ],
      url: 'https://www.thecodesquad.com/blog',
      type: 'website',
      'og:image:alt': 'TheCodeSquad Website Preview',
    },
    twitter: {
      site: '@thecodesquad',
      title: 'TheCodeSquad Tech Blog | Insights on Web Development & Digital Trends',
      description:
        'Stay ahead in the tech world with expert insights, industry trends, and practical guides on web development, startup growth, and digital marketing.',
      images: ['/images/website-preview.jpeg'],
    },
  };
}

const page = () => {
  return <BlogPage />;
};

export default page;
