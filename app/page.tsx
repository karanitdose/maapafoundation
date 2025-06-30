"use client"
import Link from 'next/link';
import { Heart, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import GalleryPage from "./gallery/page";
 



const images = [
  'https://maapafoundation.org/_next/image?url=%2F9.jpg&w=1920&q=75',
  'https://maapafoundation.org/_next/image?url=%2F46.jpg&w=1920&q=75',
  'http://localhost:3000/_next/image?url=%2Fslider-3.png&w=640&q=75',
]
export default function Home() {
   const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">      Join Maapa Foundation</h2>
            <button className="mt-4 px-6 py-3 text-white font-semibold bg-[#C30047] rounded hover:opacity-90 transition">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C30047] to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Making a Difference,
              <br />
              <span className="text-red-200">One Life at a Time</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Join Maapa Foundation in our mission to create positive change through education, 
              healthcare, and community development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donation"
                className="bg-white text-[#C30047] px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center justify-center"
              >
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#C30047] transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#C30047] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C30047] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100</h3>
              <p className="text-gray-600">Lives Inproved</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C30047] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Events Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C30047] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* galley code  */}

      <GalleryPage />

      {/* Our Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Maapa Foundation, we believe that every individual deserves access to quality education, 
                healthcare, and opportunities for growth. We work tirelessly to bridge gaps in underserved 
                communities and create sustainable solutions for lasting change.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through our comprehensive programs and partnerships, we focus on empowering individuals 
                and communities to build better futures for themselves and generations to come.
              </p>
              <Link
                href="/about"
                className="bg-[#C30047] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center"
              >
                Read Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C30047] p-2 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                    <p className="text-gray-600">Providing quality education and learning opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C30047] p-2 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Healthcare</h3>
                    <p className="text-gray-600">Improving access to essential healthcare services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C30047] p-2 rounded-full">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Community Development</h3>
                    <p className="text-gray-600">Building sustainable communities for the future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#C30047] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Your support can transform lives and create lasting change in communities around the world. 
            Join us in our mission to build a better future for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donation"
              className="bg-white text-[#C30047] px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center justify-center"
            >
              Donate Today
              <Heart className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#C30047] transition-colors inline-flex items-center justify-center"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}