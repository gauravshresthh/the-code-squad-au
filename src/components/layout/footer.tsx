import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="p-6">
      <div className="bg-[#F4F6FA] rounded-2xl p-6">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-10 xl:gap-28 ">
            <div className="lg:w-1/3">
              <Link
                href="/"
                className="text-lg md:text-xl font-bold text-primary flex items-center gap-4"
              >
                <Image src="/icons/logo.svg" alt="logo" height={50} width={50} />
                TheCodeSquad
              </Link>
              <div className="text-sm md:text-base text-[#909090] mt-4">
                At TheCodeSquad, we craft innovative, scalable, and
                user-friendly software solutions tailored to your business
                needs. Whether you&apos;re a startup or an established
                enterprise, our expert team is here to help you navigate the
                digital landscape with confidence. Let’s build something great
                together!
              </div>
            </div>
            <div className="md:flex justify-between xl:gap-20 lg:w-2/3">
              <div className="flex gap-10 xl:gap-20 mt-8 xl:w-1/3">
                <div>
                  <div className="text-primary font-semibold">Quick Links</div>
                  <div className="text-primary mt-1 text-sm md:text-base flex flex-col">
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About</Link>
                    <Link href="/services">Services</Link>
                    {/* <Link href="/">Blogs</Link> */}
                    <Link href="/contact-us">Contact</Link>
                  </div>
                </div>
                {/* <div>
                  <div className="text-primary">Follow Us</div>
                  <div className="text-[#909090] text-sm md:text-base mt-1">
                    <div>Facebook</div>
                    <div>Instagram</div>
                    <div>LinkedIn</div>
                  </div>
                </div> */}
              </div>
              <div className="mt-8 xl:w-2/3">
                <div className="text-primary">Subscribe to our newsletter</div>
                <div className="mt-2 flex items-center rounded-lg md:rounded-full border border-[#d8d8db] pl-2 md:pl-4 bg-white">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full focus:outline-none text-sm md:text-base"
                  />
                  <Link href="/" className={`inline-flex items-center px-4 md:px-8 py-2 md:py-3 border border-transparent text-base lg:text-base font-medium rounded-lg md:rounded-full text-white bg-gradient-to-br from-primary to-secondary transition duration-500 hover:bg-gradient-to-br hover:from-secondary hover:to-primary`}>Subscribe</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-[#909090] border-t border-slate-200 pt-4">
            &copy; {new Date().getFullYear()} TheCodeSquad. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
