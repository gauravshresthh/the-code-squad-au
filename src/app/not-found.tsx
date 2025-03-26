import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-6">
      <div
        className="bg-[url('/images/grid.svg'),url('/images/gradient1.avif'),url('/images/gradient2.avif'),url('/images/gradient3.avif'),url('/images/gradient4.avif'),url('/images/gradient5.avif')] bg-[#f5f6f9] bg-cover bg-center 
 text-center border border-[#d8d8db]  flex flex-col items-center justify-center gap-4
rounded-3xl px-2 pt-30 md:pt-50 pb-20 md:pb-60 min-h-screen"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="border-r-1 border-[#d8d8db] pr-4">
            <h1>Not Found</h1>
          </div>
          <div>
            <p>This page could not be found.</p>
          </div>
        </div>
        <Link href="/" className={`inline-flex items-center px-4 md:px-8 py-2 md:py-3 border border-transparent text-base lg:text-base font-medium rounded-lg md:rounded-full text-white bg-gradient-to-br from-primary to-secondary transition duration-500 hover:bg-gradient-to-br hover:from-secondary hover:to-primary`}>Return Home</Link>
      </div>
    </div>
  );
}
