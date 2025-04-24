import Link from 'next/link';
import { BookOpen, Users, Calendar, Award } from 'lucide-react';

const courses = [
  {
    title: 'Classes 6-7',
    boards: 'ICSE, CBSE, WBBSE, Urdu Board',
    description: 'Foundation courses designed to build a strong academic base with focus on concept clarity and skill development.',
    icon: <BookOpen className="h-6 w-6 text-brand-yellow" />,
    link: '/courses/6-7',
    features: ['Small batch sizes', 'Personalized attention', 'Regular assessments', 'Parent feedback sessions']
  },
  {
    title: 'Classes 8-10',
    boards: 'ICSE, CBSE, WBBSE, Urdu Board',
    description: 'Comprehensive courses focusing on board exam preparation with advanced subject knowledge and problem-solving skills.',
    icon: <Users className="h-6 w-6 text-brand-yellow" />,
    link: '/courses/8-10',
    features: ['Board exam focus', 'Weekly mock tests', 'Doubt clearing sessions', 'Performance tracking']
  },
  {
    title: 'Classes 11-12',
    boards: 'ICSE, CBSE, WBBSE',
    description: 'Specialized courses for college preparation focusing on board exams and competitive entrance tests like JEE and WBJEE.',
    icon: <Award className="h-6 w-6 text-brand-yellow" />,
    link: '/courses/11-12',
    features: ['Stream specialization', 'Entrance exam prep', 'Career counseling', 'Expert faculty']
  }
];

export default function CoursesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Our Course <span className="text-brand-blue">Offerings</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            NAS offers tuition classes for students from classes 6 to 12 across multiple boards, providing 
            quality offline education with personalized career guidance. We also assist our students in preparing 
            for competitive exams like JEE and WBJEE. Education with a Purpose, Revolution with a Vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  {course.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">{course.title}</h3>
                  <p className="text-brand-blue text-sm">{course.boards}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-yellow"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={course.link}
                className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-brand-blue text-brand-blue rounded-md font-medium hover:bg-brand-blue hover:text-white transition-colors"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/courses" 
            className="inline-block btn-primary"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
} 