"use client";

import Image from 'next/image';
import Link from 'next/link';

const teachers = [
  {
    name: 'Shaquib Shakil',
    role: 'Mathematics',
    image: '/faculty/teacher1.jpg', // Placeholder
    qualifications: 'M.Sc. Mathematics'
  },
  {
    name: 'MD Shadaan',
    role: 'Science',
    image: '/faculty/teacher2.jpg', // Placeholder
    qualifications: 'M.Sc. Physics'
  },
  {
    name: 'Shaista Solanki',
    role: 'Language Arts',
    image: '/faculty/teacher3.jpg', // Placeholder
    qualifications: 'M.A. English Literature'
  },
  {
    name: 'Arqam Ansari',
    role: 'Social Sciences',
    image: '/faculty/teacher4.jpg', // Placeholder
    qualifications: 'M.A. History'
  },
  {
    name: 'Sara Nafis',
    role: 'English',
    image: '/faculty/teacher5.jpg', // Placeholder
    qualifications: 'M.A. English'
  },
  {
    name: 'Konain',
    role: 'Mathematics',
    image: '/faculty/teacher6.jpg', // Placeholder
    qualifications: 'M.Sc. Mathematics'
  },
  {
    name: 'Laraib Daulat Warsi',
    role: 'Science',
    image: '/faculty/teacher7.jpg', // Placeholder
    qualifications: 'M.Sc. Chemistry'
  },
  {
    name: 'Sarah Sajjid',
    role: 'History',
    image: '/faculty/teacher8.jpg', // Placeholder
    qualifications: 'M.A. History'
  },
  {
    name: 'Sheefa Nadeem',
    role: 'Geography',
    image: '/faculty/teacher9.jpg', // Placeholder
    qualifications: 'M.A. Geography'
  },
  {
    name: 'Dastagir Alam',
    role: 'Computer Science',
    image: '/faculty/teacher10.jpg', // Placeholder
    qualifications: 'M.Tech Computer Science'
  },
  {
    name: 'Inzamam',
    role: 'Physical Education',
    image: '/faculty/teacher11.jpg', // Placeholder
    qualifications: 'B.P.Ed'
  }
];

export default function FacultySection() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Our Expert <span className="text-brand-blue">Faculty</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our teachers are selected for their expertise, passion for teaching, and commitment to student success. 
            Each brings years of experience and specialized knowledge to the classroom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                  {/* We'll use a placeholder for images in this example */}
                  {/* <Image 
                    src={teacher.image} 
                    alt={`Photo of ${teacher.name}`}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-brand-dark group-hover:text-brand-blue transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-brand-blue font-medium">{teacher.role}</p>
                  <p className="text-gray-600 text-sm">{teacher.qualifications}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-dark">Join Our <span className="text-brand-blue">Teaching Team</span></h3>
            <p className="text-gray-600">
              We're always looking for talented educators who are passionate about making a difference in students' lives. 
              If you're dedicated to academic excellence and want to be part of our revolutionary approach to education, 
              we'd love to hear from you.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-brand-yellow"></span>
                Competitive compensation
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-brand-yellow"></span>
                Professional development opportunities
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-brand-yellow"></span>
                Collaborative work environment
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-brand-yellow"></span>
                Modern teaching facilities
              </li>
            </ul>
            <Link 
              href="/careers" 
              className="inline-block btn-primary mt-4"
            >
              View Open Positions
            </Link>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
            <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            {/* Placeholder for teacher team image */}
            {/* <Image 
              src="/faculty/team.jpg" 
              alt="NAS Revolution Centre Faculty Team"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
} 