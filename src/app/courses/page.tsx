import PageHeader from '@/components/PageHeader';
import { BookOpen, Users, Award, Target, BookOpenCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Courses | NAS Revolution Centre',
  description: 'Explore tuition classes for students in grades 6-12 across multiple boards with career guidance and competitive exam preparation at NAS Revolution Centre.'
};

const courses = [
  {
    title: 'Classes 6-7',
    boards: 'ICSE, CBSE, WBBSE, Urdu Board',
    description: 'Foundation courses designed to build a strong academic base with focus on concept clarity and skill development.',
    icon: <BookOpen className="h-10 w-10 text-brand-yellow" />,
    features: ['Small batch sizes', 'Personalized attention', 'Regular assessments', 'Parent feedback sessions'],
    detailedDescription: 'Our foundation courses for Classes 6-7 are carefully designed to build a strong academic base. We focus on developing conceptual clarity, critical thinking skills, and a love for learning in these formative years. Our experienced teachers ensure that students grasp fundamental concepts across all subjects, setting them up for success in higher classes.'
  },
  {
    title: 'Classes 8-10',
    boards: 'ICSE, CBSE, WBBSE, Urdu Board',
    description: 'Comprehensive courses focusing on board exam preparation with advanced subject knowledge and problem-solving skills.',
    icon: <Users className="h-10 w-10 text-brand-yellow" />,
    features: ['Board exam focus', 'Weekly mock tests', 'Doubt clearing sessions', 'Performance tracking'],
    detailedDescription: 'For Classes 8-10, our courses focus on comprehensive board exam preparation while developing advanced subject knowledge and problem-solving skills. We provide structured learning with regular assessments to track progress and identify areas for improvement. Our specialized teaching approach helps students excel in their board examinations while building a strong foundation for higher studies.'
  },
  {
    title: 'Classes 11-12',
    boards: 'ICSE, CBSE, WBBSE',
    description: 'Specialized courses for college preparation focusing on board exams and competitive entrance tests like JEE and WBJEE.',
    icon: <Award className="h-10 w-10 text-brand-yellow" />,
    features: ['Stream specialization', 'Entrance exam prep', 'Career counseling', 'Expert faculty'],
    detailedDescription: 'Our Classes 11-12 programs offer specialized streams (Science, Commerce, Arts) with expert guidance for both board exams and competitive entrance tests. We provide comprehensive preparation for JEE, WBJEE, and other competitive exams with specialized coaching and regular practice tests. Our faculty includes subject matter experts who provide personalized attention to ensure students achieve their academic goals and secure admissions to prestigious institutions.'
  }
];

export default function CoursesPage() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Our Course Offerings"
        highlightedWord="Course"
        subtitle="NAS offers tuition classes for students from classes 6 to 12 across multiple boards, providing quality offline education with personalized career guidance. Education with a Purpose, Revolution with a Vision."
        breadcrumbs={[
          { label: 'Courses', href: '/courses' }
        ]}
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Comprehensive Education for All</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              At NAS Revolution Centre, we offer specialized tuition classes for students in grades 6 to 12 across ICSE, CBSE, WBBSE, and Urdu Board. Our offline education program is designed to provide personalized attention and quality teaching to help students excel academically. We also provide comprehensive career guidance and assist our students in preparing for competitive exams like JEE and WBJEE.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Course Offerings */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-brand-dark mb-4">Our <span className="text-brand-blue">Programs</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer carefully structured programs tailored to different educational levels, ensuring academic excellence across all boards.
            </p>
          </div>

          {courses.map((course, index) => (
            <div key={index} className="mb-16">
              <div className="bg-brand-light rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="bg-white p-6 rounded-full">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">{course.title}</h3>
                    <p className="text-brand-blue">{course.boards}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-brand-dark mb-4">Program Overview</h4>
                    <p className="text-gray-600 mb-6">
                      {course.detailedDescription}
                    </p>
                    <Link 
                      href={`/courses/${course.title.toLowerCase().replace(/classes\s/, '').replace('-', '')}`}
                      className="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors"
                    >
                      View detailed curriculum <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-brand-dark mb-4">Key Features</h4>
                    <ul className="space-y-4">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1 mr-3">
                            <Target className="h-5 w-5 text-brand-yellow" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Exam Preparation */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Competitive Exam Preparation</h2>
              <p className="text-gray-600 max-w-4xl mx-auto">
                We provide specialized coaching for various competitive examinations to help our students secure admissions to prestigious institutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-light p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpenCheck className="h-8 w-8 text-brand-yellow mr-4" />
                  <h3 className="text-xl font-bold text-brand-dark">JEE Preparation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our comprehensive JEE preparation program covers all aspects of Physics, Chemistry, and Mathematics required for the examination. Our expert faculty provides specialized coaching with regular mock tests and personalized feedback.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    Comprehensive study material
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    Regular practice tests
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    One-on-one doubt clearing sessions
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-light p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpenCheck className="h-8 w-8 text-brand-yellow mr-4" />
                  <h3 className="text-xl font-bold text-brand-dark">WBJEE Preparation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our WBJEE preparation program is designed to help students secure admissions to top engineering colleges in West Bengal. We focus on building a strong conceptual foundation and problem-solving skills required for the examination.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    Specialized coaching by experienced faculty
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    Focus on WBJEE-specific question patterns
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    Performance tracking and improvement strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Excel in Your Academic Journey?</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            Join NAS Revolution Centre and experience our unique approach to education that combines academic excellence with character development. Education with a Purpose, Revolution with a Vision.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 