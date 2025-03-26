/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import { toast } from 'nextjs-toast-notify';

import emailjs from 'emailjs-com';
import SecondaryButton from '@/components/shared/secondary-button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    client_phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    client_phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', client_phone: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formData.client_phone) {
      newErrors.client_phone = 'Phone number is required';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    console.log(formData);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        toast.success('Message sent successfully!', {
          duration: 4000,
          progress: true,
          position: 'top-right',
          transition: 'bounceIn',
          icon: '',
          sound: true,
        });
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          client_phone: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error('EmailJS Error:', error);
        toast.error('Message sent failed!', {
          duration: 4000,
          progress: true,
          position: 'top-right',
          transition: 'bounceIn',
          icon: '',
          sound: true,
        });
      });
  };

  return (
    <div className="p-6">
      <div
        className="bg-[url('/images/grid.svg'),url('/images/gradient1.avif'),url('/images/gradient2.avif'),url('/images/gradient3.avif'),url('/images/gradient4.avif'),url('/images/gradient5.avif')] bg-[#f5f6f9] bg-cover bg-center 
    flex items-start border border-[#d8d8db] 
    rounded-3xl px-2 pt-30 md:pt-50 pb-20 md:pb-60 min-h-[calc(100vh-3rem)]"
      >
        <div className="md:flex items-start justify-center w-full md:w-[85%] bg-white rounded-3xl mx-auto">
        <div className="md:w-1/2 p-9 md:p-16 bg-gradient-to-r from-[#fdfbfb] to-[#f3e7e9] md:min-h-[800px] rounded-3xl text-black">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-4">
              Let&apos;s Build Together.
            </h1>
            <p className="text-base md:text-lg mb-12">
              Describe your business, leave us your contact info, we&apos;ll get
              back to you immediately.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-6 md:p-8 bg-tertiary rounded-full">
                  <EnvelopeSimple
                    size={24}
                    className="md:size-8"
                    color="white"
                  />
                </div>
                <div>
                  <p className="sm:text-xs md:text-sm text-gray-500">
                    EMAIL US
                  </p>
                  <p>info@thecodesquad.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-6 md:p-8 bg-tertiary rounded-full">
                  <MapPin size={24} className="md:size-8" color="white" />
                </div>
                <div>
                  <p className="sm:text-xs md:text-sm text-gray-500">
                    LOCATION
                  </p>
                  <p>Imadole, Lalitpur</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-6 md:p-8 bg-tertiary rounded-full">
                  <Phone size={24} className="md:size-8" color="white" />
                </div>
                <div>
                  <p className="sm:text-xs md:text-sm text-gray-500">CALL US</p>
                  <p>
                    +977-9816947062,
                    <br /> +977-9763693458
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white p-8 md:p-16 md:h-[800px]">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border-b border-gray-300 p-2 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border-b border-gray-300 p-2 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="client_phone"
                  name="client_phone"
                  value={formData.client_phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border-b border-gray-300 p-2 focus:outline-none"
                />
                {errors.client_phone && (
                  <p className="text-red-500 text-sm">{errors.client_phone}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us something about your project"
                  className="w-full border-b border-gray-300 p-2 focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="mt-6">
                <SecondaryButton onClick={handleSubmit} loading={loading}>
                  Send Message
                </SecondaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
