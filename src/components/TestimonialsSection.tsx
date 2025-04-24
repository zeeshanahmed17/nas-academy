"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "NAS Revolution Centre transformed my educational journey. The teachers here are dedicated and helped me achieve excellent results in my board exams. The personalized attention made all the difference.",
    author: "Rahul Sharma",
    role: "Class 10 Student, ICSE Board",
    stars: 5
  },
  {
    content: "As a parent, I'm extremely satisfied with the quality of education at NAS Revolution Centre. My daughter has shown remarkable improvement in her academics and has developed a love for learning.",
    author: "Priya Malhotra",
    role: "Parent of Class 7 Student",
    stars: 5
  },
  {
    content: "The faculty at NAS Revolution Centre are exceptional. They make complex subjects understandable and have helped me prepare thoroughly for my board exams. I couldn't have asked for better guidance.",
    author: "Aryan Khan",
    role: "Class 12 Student, CBSE Board",
    stars: 5
  },
  {
    content: "I joined NAS Revolution Centre for science subjects, and it was one of the best decisions. The practical approach to teaching and regular assessments helped me score well above my expectations.",
    author: "Zainab Ahmed",
    role: "Class 11 Student, WBBSE Board",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-brand-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">What Our <span className="text-brand-blue">Students Say</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our students and parents about their experiences at NAS Revolution Centre.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-10">
            <div className="absolute top-6 left-6 text-brand-yellow opacity-30">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <span className="text-brand-blue font-bold text-lg">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: testimonials[currentIndex].stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-blue' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-brand-dark hover:text-brand-blue transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-brand-dark hover:text-brand-blue transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
} 