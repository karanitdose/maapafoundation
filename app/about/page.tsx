import { Heart, Users, Globe, Award, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C30047] to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Maapa Foundation</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Discover our story, mission, and the impact we're making in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Maapa Foundation was born from a simple yet powerful belief: that every person, 
                regardless of their circumstances, deserves the opportunity to thrive. Founded in 2015, 
                our organization has grown from a small group of passionate individuals to a global 
                network of change-makers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as local community outreach has evolved into comprehensive programs 
                spanning education, healthcare, and sustainable development. We've learned that 
                lasting change comes from understanding communities deeply and working alongside 
                them to create solutions that truly matter.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our reach while staying true to our core values: 
                compassion, integrity, innovation, and impact.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-[#C30047] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">2015</h3>
                  <p className="text-gray-600">Founded</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#C30047] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                  <p className="text-gray-600">Lives Impacted</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#C30047] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">25</h3>
                  <p className="text-gray-600">Communities</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#C30047] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                  <p className="text-gray-600">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#C30047] p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower underserved communities through comprehensive programs in education, 
                healthcare, and sustainable development, creating opportunities for individuals 
                to build better lives and stronger communities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#C30047] p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where every person has access to quality education, healthcare, and 
                economic opportunities, regardless of their background or circumstances, 
                fostering global prosperity and equality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to creating positive change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-[#C30047]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach every situation with empathy and understanding, putting people first.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-[#C30047]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all our work.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-[#C30047]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace creative solutions and new approaches to solve complex challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-[#C30047]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the positive, lasting change we create in communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who guide our mission and drive our impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pradeep Mishra</h3>
              <p className="text-[#C30047] font-medium mb-2">Executive Director</p>
              <p className="text-gray-600 text-sm">
                20+ years of experience in nonprofit leadership and community development.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pradeep Mishra</h3>
              <p className="text-[#C30047] font-medium mb-2">Program Director</p>
              <p className="text-gray-600 text-sm">
                Former healthcare administrator with expertise in global health initiatives.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Rodriguez</h3>
              <p className="text-[#C30047] font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Skilled in project management and sustainable development strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}