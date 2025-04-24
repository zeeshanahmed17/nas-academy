import PageHeader from '@/components/PageHeader';
import { BookOpen, Target, Clock, ChevronRight, Brain, Users, Award, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Classes 8-10 Courses | NAS Revolution Centre',
  description: 'Comprehensive courses for Classes 8-10 at NAS Revolution Centre preparing students for board exams with focus on conceptual learning and exam strategies.'
};

export default function Classes810Page() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Classes 8-10 Advanced Courses"
        highlightedWord="Advanced"
        subtitle="Comprehensive academic programs designed to prepare students for board examinations with strong concept building and strategic exam preparation."
        breadcrumbs={[
          { label: 'Courses', href: '/courses' },
          { label: 'Classes 8-10', href: '/courses/8-10' }
        ]}
      />

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="bg-brand-light p-6 rounded-full">
                <BookOpen className="h-10 w-10 text-brand-yellow" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-dark">Board Examination Programs</h2>
                <p className="text-brand-blue">ICSE, CBSE, WBBSE, Urdu Board</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Our comprehensive courses for Classes 8-10 are strategically designed to prepare students for board examinations while ensuring deep conceptual understanding. We combine thorough subject knowledge with effective exam strategies to help students excel in their academic journey. Our expert faculty provides individualized attention to address specific learning needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-brand-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Program Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Specialized board exam preparation with past paper analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Regular mock tests simulating board exam conditions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Detailed performance analytics and improvement plans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Subject specialists to address challenging topics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Subjects Offered</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Mathematics - Advanced problem solving and board exam techniques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Science (Physics, Chemistry, Biology) - Comprehensive theory and practical applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">English - Literature comprehension and writing skills for board standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Social Studies - Structured approach to History, Geography, and Civics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-brand-dark mb-4">Our <span className="text-brand-blue">Teaching Approach</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine thorough concept building with strategic exam preparation to ensure students achieve their full potential in board examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Brain className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Concept Mastery</h3>
              <p className="text-gray-600">
                We ensure students develop strong conceptual foundations in each subject, enabling them to tackle varied question formats confidently.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Exam Strategies</h3>
              <p className="text-gray-600">
                Students learn effective time management, question prioritization, and answer presentation techniques specific to board examination requirements.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Performance Analysis</h3>
              <p className="text-gray-600">
                Regular assessments with detailed feedback help students understand their strengths and areas for improvement, facilitating targeted study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Exam Specialization */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Board Exam Preparation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Preparation Strategy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Structured Syllabus Coverage:</span>
                      <p className="text-gray-600">Systematic completion of board syllabus with periodic revision cycles</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Strategic Practice:</span>
                      <p className="text-gray-600">Focus on important questions, frequently tested concepts, and high-scoring topics</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Doubt Resolution:</span>
                      <p className="text-gray-600">Dedicated sessions for addressing complex concepts and challenging questions</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Mock Examinations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Clock className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Full Syllabus Tests:</span>
                      <p className="text-gray-600">Comprehensive exams following board exam patterns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Clock className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Chapter-wise Tests:</span>
                      <p className="text-gray-600">Regular assessments to evaluate understanding of individual chapters</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Clock className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Performance Analysis:</span>
                      <p className="text-gray-600">Detailed feedback with personalized improvement strategies</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Special Board Exam Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Previous Year Paper Analysis</span>
                    <p className="text-gray-600">Detailed breakdown of question patterns and important topics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Answer Writing Workshops</span>
                    <p className="text-gray-600">Training on presentation and scoring techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Pre-Board Examinations</span>
                    <p className="text-gray-600">Multiple rounds of full syllabus tests before board exams</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Last Minute Revision Sessions</span>
                    <p className="text-gray-600">Quick recap of important concepts before exams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Excel in Your Board Examinations</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            Join our specialized programs for Classes 8-10 and build the foundation for academic excellence and future success.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/admissions" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 