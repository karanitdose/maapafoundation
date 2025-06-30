import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#C30047] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-full">
                <Heart className="h-6 w-6 text-[#C30047]" />
              </div>
              <span className="text-xl font-bold">Maapa Foundation</span>
            </div>
            <p className="text-red-100 mb-4">
              Dedicated to making a positive impact in communities through education, healthcare, 
              and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-red-100 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-red-100 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-red-100 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-red-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-red-100 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-red-100 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/donation" className="text-red-100 hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-red-100 text-sm">info@maapafoundation.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-red-100 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-red-100 text-sm">123 Foundation St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-400 mt-8 pt-8 text-center">
          <p className="text-red-100">&copy; 2025 Maapa Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}