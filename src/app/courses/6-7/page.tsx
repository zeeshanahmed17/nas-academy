import PageHeader from '@/components/PageHeader';
import { BookOpen, Target, Clock, ChevronRight, Brain, Users, Award, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Classes 6-7 Courses | NAS Revolution Centre',
  description: 'Foundation courses for Classes 6-7 at NAS Revolution Centre focusing on concept clarity, skill development, and instilling a love for learning.'
};

export default function Classes67Page() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Classes 6-7 Foundation Courses"
        highlightedWord="Foundation"
        subtitle="Building a strong academic base with focus on concept clarity, skill development, and nurturing a love for learning in these formative years."
        breadcrumbs={[
          { label: 'Courses', href: '/courses' },
          { label: 'Classes 6-7', href: '/courses/6-7' }
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
                <h2 className="text-3xl font-bold text-brand-dark">Foundation Programs</h2>
                <p className="text-brand-blue">ICSE, CBSE, WBBSE, Urdu Board</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Our foundation courses for Classes 6-7 are carefully designed to build a strong academic base. We focus on developing conceptual clarity, critical thinking skills, and a love for learning in these formative years. Our experienced teachers ensure that students grasp fundamental concepts across all subjects, setting them up for success in higher classes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-brand-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Program Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Small batch sizes ensuring individual attention to each student</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Regular assessments with constructive feedback</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Structured approach to build strong fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Parent-teacher meetings to track progress and areas of improvement</span>
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
                    <span className="text-gray-600">Mathematics - Building numerical abilities and logical reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Science - Developing scientific temperament through experiments and activities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">English - Enhancing reading comprehension and creative writing skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ChevronRight className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <span className="text-gray-600">Social Studies - Understanding history, geography and civics through interactive learning</span>
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
              We believe in making learning enjoyable while building strong foundations that will support students throughout their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Brain className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Interactive Learning</h3>
              <p className="text-gray-600">
                We utilize hands-on activities, visual aids, and interactive exercises to make learning engaging and effective for young minds.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Concept Clarity</h3>
              <p className="text-gray-600">
                Our approach focuses on ensuring students develop clear understanding of fundamental concepts rather than rote memorization.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Individualized Attention</h3>
              <p className="text-gray-600">
                With small batch sizes, our teachers can identify each student's learning style and adapt teaching methods accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Curriculum Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Learning Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Activity-Based Learning:</span>
                      <p className="text-gray-600">Using practical activities to reinforce theoretical concepts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Critical Thinking:</span>
                      <p className="text-gray-600">Encouraging students to ask questions and develop analytical skills</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Target className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Creative Expression:</span>
                      <p className="text-gray-600">Opportunities for students to express their understanding through projects and presentations</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Assessment Strategy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Clock className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Regular Quizzes:</span>
                      <p className="text-gray-600">Short assessments to reinforce learning and identify gaps</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Clock className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Chapter Tests:</span>
                      <p className="text-gray-600">Comprehensive evaluations to assess understanding of complete topics</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Clock className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-dark">Progress Reports:</span>
                      <p className="text-gray-600">Detailed feedback shared with parents to track growth and development</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Special Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Moral Education</span>
                    <p className="text-gray-600">Integration of values and ethics in the curriculum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Reading Clubs</span>
                    <p className="text-gray-600">Encouraging reading habits and language development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Parent Involvement</span>
                    <p className="text-gray-600">Regular parent-teacher interactions for collaborative development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Learning Games</span>
                    <p className="text-gray-600">Educational games to make learning enjoyable and effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Development */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Holistic Development</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond academics, we focus on nurturing well-rounded individuals with strong character and values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-brand-yellow mr-4" />
                <h3 className="text-xl font-bold text-brand-dark">Social Skills</h3>
              </div>
              <p className="text-gray-600">
                We encourage teamwork, collaboration, and effective communication through group activities and projects that help students develop essential interpersonal skills.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-brand-yellow mr-4" />
                <h3 className="text-xl font-bold text-brand-dark">Cognitive Development</h3>
              </div>
              <p className="text-gray-600">
                Our curriculum includes puzzles, brain teasers, and logical reasoning exercises that stimulate mental growth and enhance problem-solving abilities.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-brand-yellow mr-4" />
                <h3 className="text-xl font-bold text-brand-dark">Character Building</h3>
              </div>
              <p className="text-gray-600">
                We integrate moral values and ethics into our teaching, helping students develop integrity, responsibility, and empathy as they grow academically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Give Your Child a Strong Foundation</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            Join NAS Revolution Centre and watch your child develop a love for learning while building the academic foundation that will support them throughout their educational journey.
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