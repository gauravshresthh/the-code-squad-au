import ContactUs from '@/components/contact-us/contact-us';

export async function generateMetadata() {
  return {
    title: 'TheCodeSquad | Professional Digital Solutions & App Development',
    applicationName: 'TheCodeSquad',
    description: 'Professional Digital Solutions & App Development',
    authors: [
      {
        name: 'TheCodeSquad Team',
        url: 'https://www.thecodesquad.com/',
      },
    ],
    keywords: [
      'The Code Squad',
      'TheCodeSquad',
      'software development',
      'custom software solutions',
      'web development',
      'mobile app development',
      'digital transformation',
      'technology consulting',
      'it solutions',
      'cloud computing',
      'saas development',
      'ai & machine learning',
    ],
    creator: 'TheCodeSquad Team',
    publisher: 'TheCodeSquad',
    robots: { index: true, follow: true },
    icons: '/icons/logo.png',
    images: [
      {
        url: 'images/website-preview.jpeg',
        width: 1200,
        height: 630,
        alt: 'TheCodeSquad Website Preview',
      },
    ],
    metadataBase: new URL('https://www.thecodesquad.com/'),
    // manifest:,
    openGraph: {
      title: 'TheCodeSquad | Professional Digital Solutions & App Development',
      description: 'Professional Digital Solutions & App Development',
      icons: '/icons/logo.png',
      images: [
        {
          url: 'images/website-preview.jpeg',
          width: 1200,
          height: 630,
          alt: 'TheCodeSquad Website Preview',
        },
        {
          url: 'images/website-preview-about-us.jpeg',
          width: 1200,
          height: 630,
          alt: 'TheCodeSquad Website Preview',
        },
      ],
      url: 'https://www.thecodesquad.com/',
      type: 'website',
      'og:image:alt': 'TheCodeSquad Website Preview',
    },
    twitter: {
      site: '@thecodesquad',
      title: 'TheCodeSquad | Professional Digital Solutions & App Development',
      description: 'Professional Digital Solutions & App Development',
      icons: '/icons/logo.png',
      images: [
        'images/website-preview.jpeg',
        'images/website-preview-about-us.jpeg',
      ],
    },
  };
}

const ContactUsPage = () => {
  return <ContactUs />;
};

export default ContactUsPage;
