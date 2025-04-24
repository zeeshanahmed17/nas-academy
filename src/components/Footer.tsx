import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">NAS Revolution Centre</h3>
            <p className="mb-4 text-gray-300">
              Education with a Purpose, Revolution with a Vision. Ignite Your Potential with us.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-300 hover:text-white transition-colors">Faculty</Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">28/B/1/7 Dr.M.N.Chatterjee Sarani (Inside Churi Gali) Raja Bazar Kolkata - 9</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-yellow flex-shrink-0" />
                <Link href="tel:+919073040840" className="text-gray-300 hover:text-white transition-colors">
                  +91 90730 40840
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-yellow flex-shrink-0" />
                <Link href="tel:+917980837334" className="text-gray-300 hover:text-white transition-colors">
                  +91 79808 37334
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-brand-yellow flex-shrink-0" />
                <Link href="mailto:contact@nasrevolution.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@nasrevolution.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li className="text-gray-300">Saturday: 9:00 AM - 5:00 PM</li>
              <li className="text-gray-300">Sunday: Closed</li>
            </ul>
            <Link href="/contact" className="btn-secondary mt-4 inline-block">
              Get Directions
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NAS Revolution Centre. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 