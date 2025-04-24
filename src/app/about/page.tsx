import { Rocket, BookOpen, Users, Award, Target } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'About Us | NAS Revolution Centre',
  description: 'Learn about NAS Revolution Centre, our history, mission, vision, and educational philosophy.'
};

export default function AboutPage() {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <PageHeader 
        title="About NAS Revolution Centre"
        highlightedWord="NAS Revolution Centre"
        subtitle="Education with a Purpose, Revolution with a Vision. We are dedicated to providing outstanding education that empowers students to excel in their academic pursuits."
        breadcrumbs={[
          { label: 'About', href: '/about' }
        ]}
      />

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    NAS Revolution Centre was founded by visionaries Md Sadaan and Md Anas with a profound belief that every child deserves access to affordable, quality education. Born from their passion for transforming education in Kolkata, they established this institution to nurture both academic excellence and moral character.
                  </p>
                  <p>
                    The founders' mission was clear: to create an educational environment where children fall in love with learning. They recognized that true education goes beyond textbooks and exams—it involves inspiring curiosity, critical thinking, and a genuine passion for knowledge.
                  </p>
                  <p>
                    Today, NAS Revolution Centre proudly serves students across multiple boards including ICSE, CBSE, WBBSE, and Urdu Board, while staying true to our founding vision of making education accessible to all. Our approach balances academic rigor with moral education, preparing students not just for examinations, but for a purposeful and principled life.
                  </p>
                </div>
              </div>
              <div className="relative h-80 bg-gray-200 rounded-lg animate-pulse">
                {/* Placeholder for an image of the institution or founders */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-brand-dark">Our Educational <span className="text-brand-blue">Philosophy</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We are guided by clear principles that shape our approach to education and define what we stand for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional education that empowers students to achieve academic excellence 
                and develop essential life skills in a supportive and inspiring environment.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading educational institution that transforms students into 
                knowledgeable, confident, and responsible citizens who contribute positively to society.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                  Excellence in education
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                  Student-centered approach
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                  Integrity and respect
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                  Innovation in teaching
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                  Community engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-brand-dark mb-4">Our Teaching <span className="text-brand-blue">Approach</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe in a comprehensive educational approach that addresses the unique needs of each student
              while maintaining high academic standards across all boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-brand-yellow mb-4" />
              <h3 className="text-lg font-bold text-brand-dark mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                We recognize that each student has unique learning needs and pace. 
                Our small batch sizes allow teachers to give personalized attention and 
                tailor their approach to maximize each student's potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-brand-yellow mb-4" />
              <h3 className="text-lg font-bold text-brand-dark mb-3">Expert Faculty</h3>
              <p className="text-gray-600">
                Our teachers are subject matter experts with years of experience in teaching 
                across different boards. They employ innovative teaching methods that make 
                learning engaging and effective.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-10 w-10 text-brand-yellow mb-4" />
              <h3 className="text-lg font-bold text-brand-dark mb-3">Regular Assessment</h3>
              <p className="text-gray-600">
                We conduct regular tests and assessments to gauge student progress and 
                provide timely feedback. This helps students identify areas of improvement 
                and work on them systematically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="h-10 w-10 text-brand-yellow mb-4" />
              <h3 className="text-lg font-bold text-brand-dark mb-3">Holistic Development</h3>
              <p className="text-gray-600">
                Beyond academics, we focus on developing essential life skills, 
                critical thinking, and character building that prepares students 
                for future challenges in their personal and professional lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Join Our Revolutionary Approach to Education?</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            Take the first step towards a brighter academic future for your child. 
            Explore our courses or contact us to learn more about admissions.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/courses" className="btn-secondary">
              Explore Courses
            </Link>
            <Link href="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 