import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Transforming Education in Rural Communities",
      excerpt: "Learn how our education programs are making a lasting impact in underserved rural areas, providing children with access to quality learning opportunities.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      category: "Education",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Healthcare Access: Breaking Down Barriers",
      excerpt: "Discover our innovative approaches to providing essential healthcare services to communities that need them most, including mobile clinics and telemedicine.",
      author: "Dr. Michael Chen",
      date: "March 10, 2025",
      category: "Healthcare",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Sustainable Development: Building for the Future",
      excerpt: "Explore our sustainable development initiatives that empower communities to create lasting change while protecting the environment for future generations.",
      author: "Maria Rodriguez",
      date: "March 5, 2025",
      category: "Development",
      image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Volunteer Spotlight: Stories from the Field",
      excerpt: "Meet our incredible volunteers and hear their inspiring stories of dedication, compassion, and the profound impact they're making in communities worldwide.",
      author: "Community Team",
      date: "February 28, 2025",
      category: "Community",
      image: "https://images.pexels.com/photos/6994934/pexels-photo-6994934.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Technology for Good: Digital Solutions for Development",
      excerpt: "How we're leveraging technology to amplify our impact, from digital learning platforms to data-driven program evaluation and community engagement tools.",
      author: "Tech Team",
      date: "February 20, 2025",
      category: "Innovation",
      image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Annual Report 2024: A Year of Impact",
      excerpt: "Reflecting on our achievements in 2024, from program expansions to new partnerships, and looking ahead to our goals for the coming year.",
      author: "Executive Team",
      date: "February 15, 2025",
      category: "Reports",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const categories = ["All", "Education", "Healthcare", "Development", "Community", "Innovation", "Reports"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C30047] to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Stay updated with our latest news, stories from the field, and insights into our mission to create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-[#C30047] hover:text-white hover:border-[#C30047] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gray-300 bg-cover bg-center" style={{backgroundImage: `url(${blogPosts[0].image})`}}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-[#C30047] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="ml-3 text-[#C30047] text-sm font-medium">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="text-[#C30047] font-semibold hover:text-red-600 transition-colors flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-lg text-gray-600">
              Explore our recent articles and updates from the field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-300 bg-cover bg-center" style={{backgroundImage: `url(${post.image})`}}></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-red-100 text-[#C30047] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#C30047] transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[#C30047] font-semibold hover:text-red-600 transition-colors flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#C30047] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates, stories, and impact reports directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#C30047] px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}