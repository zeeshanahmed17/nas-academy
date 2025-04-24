import PageHeader from '@/components/PageHeader';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Our Faculty | NAS Revolution Centre',
  description: 'Meet the expert faculty of NAS Revolution Centre - dedicated educators with expertise across multiple boards: ICSE, CBSE, WBBSE, and Urdu.'
};

const teachers = [
  {
    name: 'Shaquib Shakil',
    role: 'Mathematics',
    image: '/faculty/teacher1.jpg', // Placeholder
    qualifications: 'M.Sc. Mathematics',
    bio: 'Expert in Mathematics with years of experience teaching across multiple boards.'
  },
  {
    name: 'MD Shadaan',
    role: 'Science',
    image: '/faculty/teacher2.jpg', // Placeholder
    qualifications: 'M.Sc. Physics',
    bio: 'Specializes in Physics and General Science, making complex concepts easy to understand.'
  },
  {
    name: 'Shaista Solanki',
    role: 'Language Arts',
    image: '/faculty/teacher3.jpg', // Placeholder
    qualifications: 'M.A. English Literature',
    bio: 'Passionate about literature and language, with a focus on developing strong communication skills.'
  },
  {
    name: 'Arqam Ansari',
    role: 'Social Sciences',
    image: '/faculty/teacher4.jpg', // Placeholder
    qualifications: 'M.A. History',
    bio: 'Makes history and social studies come alive through engaging teaching methods.'
  },
  {
    name: 'Sara Nafis',
    role: 'English',
    image: '/faculty/teacher5.jpg', // Placeholder
    qualifications: 'M.A. English',
    bio: 'Dedicated to improving students\' English language skills through literature and grammar.'
  },
  {
    name: 'Konain',
    role: 'Mathematics',
    image: '/faculty/teacher6.jpg', // Placeholder
    qualifications: 'M.Sc. Mathematics',
    bio: 'Specializes in making mathematics accessible and enjoyable for all students.'
  },
  {
    name: 'Laraib Daulat Warsi',
    role: 'Science',
    image: '/faculty/teacher7.jpg', // Placeholder
    qualifications: 'M.Sc. Chemistry',
    bio: 'Expert in Chemistry with a hands-on approach to scientific learning.'
  },
  {
    name: 'Sarah Sajjid',
    role: 'History',
    image: '/faculty/teacher8.jpg', // Placeholder
    qualifications: 'M.A. History',
    bio: 'Passionate about bringing historical events to life in the classroom.'
  },
  {
    name: 'Sheefa Nadeem',
    role: 'Geography',
    image: '/faculty/teacher9.jpg', // Placeholder
    qualifications: 'M.A. Geography',
    bio: 'Makes geography relevant and interesting through practical examples and case studies.'
  },
  {
    name: 'Dastagir Alam',
    role: 'Computer Science',
    image: '/faculty/teacher10.jpg', // Placeholder
    qualifications: 'M.Tech Computer Science',
    bio: 'Teaches programming and computer concepts with a focus on practical applications.'
  },
  {
    name: 'Inzamam',
    role: 'Physical Education',
    image: '/faculty/teacher11.jpg', // Placeholder
    qualifications: 'B.P.Ed',
    bio: 'Promotes physical fitness and teamwork through various sports and activities.'
  }
];

export default function FacultyPage() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Our Expert Faculty"
        subtitle="Meet our dedicated team of educators who are passionate about helping students achieve academic excellence."
        breadcrumbs={[
          { label: 'Faculty', href: '/faculty' }
        ]}
      />

      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-brand-dark mb-4">Meet Our <span className="text-brand-blue">Teachers</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our faculty consists of highly qualified educators with extensive experience in their respective fields.
              They are committed to providing personalized attention and creating an engaging learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gray-300 relative">
                  <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-brand-blue opacity-70">
                      {teacher.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark">{teacher.name}</h3>
                  <div className="flex items-center text-brand-blue mb-2">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <p className="font-medium">{teacher.role}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <p className="text-sm">{teacher.qualifications}</p>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {teacher.bio}
                  </p>
                  <div className="flex items-center text-brand-yellow">
                    <Award className="h-4 w-4 mr-2" />
                    <p className="text-sm font-medium">Expert Educator</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Teaching Philosophy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At NAS Revolution Centre, our teachers follow a student-centered approach that focuses on 
                  understanding each student's unique learning needs and abilities. We believe in creating 
                  an environment where students feel comfortable asking questions and exploring concepts in depth.
                </p>
                <p>
                  Our faculty members use innovative teaching methods that combine traditional classroom instruction 
                  with interactive activities, practical demonstrations, and technology-enhanced learning. This 
                  multi-faceted approach helps students develop a deep understanding of subjects rather than 
                  just memorizing facts.
                </p>
                <p>
                  Regular assessments and personalized feedback ensure that students stay on track with their 
                  academic goals. Our teachers work closely with parents to provide updates on student progress 
                  and suggest strategies for improvement when needed.
                </p>
                <p>
                  Beyond academics, our faculty is committed to nurturing important life skills such as critical 
                  thinking, problem-solving, communication, and collaboration. We believe these skills are essential 
                  for success in further education and future careers.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Why Our Teachers Stand Out</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mr-3">1</span>
                    <p className="text-gray-600"><span className="font-medium text-brand-dark">Expert Knowledge:</span> All our teachers are subject matter experts with advanced degrees and specialized training.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mr-3">2</span>
                    <p className="text-gray-600"><span className="font-medium text-brand-dark">Experience:</span> Our faculty has years of teaching experience across multiple boards: ICSE, CBSE, WBBSE, and Urdu.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mr-3">3</span>
                    <p className="text-gray-600"><span className="font-medium text-brand-dark">Personalized Attention:</span> Small batch sizes allow our teachers to provide individualized support to each student.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mr-3">4</span>
                    <p className="text-gray-600"><span className="font-medium text-brand-dark">Continuous Learning:</span> Our teachers regularly update their knowledge and teaching methods through professional development.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-1 bg-brand-light rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Teaching Expertise</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">Mathematics & Science</h4>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">Languages & Literature</h4>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">Social Studies & Humanities</h4>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">Computer Science & Technology</h4>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">Physical Education & Sports</h4>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-brand-blue text-white rounded-lg">
                <h4 className="font-bold mb-2">Join Our Faculty</h4>
                <p className="text-sm mb-4">
                  We're always looking for passionate educators to join our team. If you're dedicated to academic excellence and want to make a difference in students' lives, we'd love to hear from you.
                </p>
                <a 
                  href="/careers" 
                  className="inline-block bg-white text-brand-blue px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Learn From the Best?</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Join NAS Revolution Centre and benefit from our expert faculty's guidance. 
            Our teachers are committed to helping each student reach their full potential.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/admissions" className="bg-brand-yellow text-brand-dark px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              Apply Now
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 