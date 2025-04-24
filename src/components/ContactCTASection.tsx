"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactCTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-brand-blue to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-white mb-4">Ready to <span className="text-brand-yellow">Ignite Your Potential</span>?</h2>
              <p className="text-gray-200 mb-8">
                Take the first step towards educational excellence. Contact us today to learn more about our programs, 
                schedule a visit, or begin the enrollment process.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-3 text-brand-yellow" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <a href="tel:+919073040840" className="hover:text-brand-yellow transition-colors">+91 90730 40840</a>
                      <a href="tel:+917980837334" className="hover:text-brand-yellow transition-colors">+91 79808 37334</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-3 text-brand-yellow" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:contact@nasrevolution.com" className="hover:text-brand-yellow transition-colors">
                      contact@nasrevolution.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start text-white">
                  <MapPin className="h-5 w-5 mr-3 text-brand-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p>28/B/1/7 Dr.M.N.Chatterjee Sarani (Inside Churi Gali) Raja Bazar Kolkata - 9</p>
                  </div>
                </div>
                
                <div className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-3 text-brand-yellow" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
                <Link href="/admissions" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity text-center">
                  Apply Now
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 