import PageHeader from '@/components/PageHeader';
import { BookOpen, Target, Clock, ChevronRight, Brain, Users, Award, Star, BookOpenCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Classes 11-12 Courses | NAS Revolution Centre',
  description: 'Advanced courses for Classes 11-12 at NAS Revolution Centre focusing on board exams, competitive entrance preparation, and career guidance for Science, Commerce, and Arts streams.'
};

export default function Classes1112Page() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Classes 11-12 Specialized Courses"
        highlightedWord="Specialized"
        subtitle="Comprehensive academic programs designed for board excellence and competitive exam success with specialized stream-based teaching for Science, Commerce, and Arts."
        breadcrumbs={[
          { label: 'Courses', href: '/courses' },
          { label: 'Classes 11-12', href: '/courses/11-12' }
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
                <h2 className="text-3xl font-bold text-brand-dark">Higher Secondary Programs</h2>
                <p className="text-brand-blue">ICSE, CBSE, WBBSE</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Our specialized courses for Classes 11-12 are designed to provide comprehensive education across Science, Commerce, and Arts streams. We focus on in-depth subject knowledge, board exam preparation, and competitive entrance test coaching. Our expert faculty guides students through this crucial phase of education, helping them secure impressive board results while preparing them for future academic pursuits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-brand-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Program Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Stream-specific expert faculty for specialized teaching</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Integrated preparation for board and competitive exams</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Career counseling and college admission guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Performance tracking with detailed analytics and feedback</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Stream Offerings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Science (PCM/PCB) - With specialized JEE/NEET/WBJEE preparation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Commerce - With focus on Accountancy, Business Studies, Economics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Arts - With emphasis on Humanities, Languages, and Social Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Foundation courses for various competitive examinations</span>
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
              We combine in-depth conceptual learning with structured exam preparation to ensure students excel in both board exams and competitive entrance tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Brain className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Advanced Concept Building</h3>
              <p className="text-gray-600">
                We focus on thorough concept clarity and application-based learning to develop a deep understanding of complex subject matter.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Strategic Exam Training</h3>
              <p className="text-gray-600">
                Students learn specific techniques for different exam formats, including time management, answer presentation, and question selection.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Personalized Guidance</h3>
              <p className="text-gray-600">
                Each student receives individualized attention and mentoring to address specific strengths and areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stream-Specific Programs */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Stream-Specific Programs</h2>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-brand-light p-4 rounded-full mr-4">
                  <BookOpenCheck className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Science Stream</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4">Subject Focus</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Physics:</span>
                        <p className="text-gray-600">In-depth coverage of mechanics, electromagnetism, optics, and modern physics with practical applications</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Chemistry:</span>
                        <p className="text-gray-600">Comprehensive study of physical, organic, and inorganic chemistry with focus on reaction mechanisms</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Mathematics/Biology:</span>
                        <p className="text-gray-600">Advanced problem-solving in mathematics or detailed study of biological systems and processes</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4">Competitive Exam Focus</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">JEE (Main & Advanced):</span>
                        <p className="text-gray-600">Specialized coaching for engineering entrance with advanced problem-solving techniques</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">NEET:</span>
                        <p className="text-gray-600">Comprehensive medical entrance preparation covering Physics, Chemistry, and Biology</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">WBJEE:</span>
                        <p className="text-gray-600">Targeted preparation for state engineering entrance examination</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-brand-light p-4 rounded-full mr-4">
                  <BookOpenCheck className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Commerce Stream</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4">Subject Focus</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Accountancy:</span>
                        <p className="text-gray-600">Comprehensive coverage of financial accounting, corporate accounting, and cost accounting</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Business Studies:</span>
                        <p className="text-gray-600">In-depth understanding of business organization, management principles, and finance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Economics:</span>
                        <p className="text-gray-600">Thorough study of micro and macroeconomics with application to real-world scenarios</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4">Career Preparation</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">CA/CS Foundation:</span>
                        <p className="text-gray-600">Basic preparation for professional courses in accounting and company secretaryship</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">B.Com Entrance:</span>
                        <p className="text-gray-600">Preparation for college admissions in top commerce colleges</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">BBA/BMS Entrance:</span>
                        <p className="text-gray-600">Preparation for management course entrances</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-brand-light p-4 rounded-full mr-4">
                  <BookOpenCheck className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Arts Stream</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4">Subject Focus</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">English Literature:</span>
                        <p className="text-gray-600">Critical analysis of literary texts, poetry, prose, and drama</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">History:</span>
                        <p className="text-gray-600">Comprehensive understanding of Indian and world history with source-based approach</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Target className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Political Science/Sociology:</span>
                        <p className="text-gray-600">In-depth study of political systems, social structures, and contemporary issues</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4">Career Preparation</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Liberal Arts College Entrance:</span>
                        <p className="text-gray-600">Preparation for admissions to prestigious liberal arts programs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Law Entrance (CLAT):</span>
                        <p className="text-gray-600">Foundation for legal studies entrance examinations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Clock className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="font-medium text-brand-dark">Mass Communication Entrance:</span>
                        <p className="text-gray-600">Preparation for media studies and journalism programs</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment and Support */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Comprehensive Support System</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide a holistic support system to ensure our students achieve their academic goals and make informed career choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-brand-yellow mr-4" />
                <h3 className="text-xl font-bold text-brand-dark">Regular Assessments</h3>
              </div>
              <p className="text-gray-600">
                Our comprehensive assessment system includes regular tests, mock examinations, and detailed performance analysis to track progress and identify areas for improvement.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-brand-yellow mr-4" />
                <h3 className="text-xl font-bold text-brand-dark">Career Counseling</h3>
              </div>
              <p className="text-gray-600">
                Our experienced counselors guide students in exploring career options, choosing appropriate courses, and preparing for college admissions based on their interests and abilities.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-brand-yellow mr-4" />
                <h3 className="text-xl font-bold text-brand-dark">Parent Engagement</h3>
              </div>
              <p className="text-gray-600">
                We maintain regular communication with parents through progress reports, parent-teacher meetings, and counseling sessions to ensure collaborative support for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Shape Your Future Success</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            Join our specialized Classes 11-12 programs at NAS Revolution Centre and set yourself on the path to academic excellence and career success.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              Enroll Now
            </Link>
            <Link href="/courses" className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-brand-blue transition-all">
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 