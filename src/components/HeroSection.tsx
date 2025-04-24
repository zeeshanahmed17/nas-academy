import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-brand-blue to-blue-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow opacity-10 transform -skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-yellow opacity-10 rounded-tr-full"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-white">
              Education with a Purpose, <span className="text-brand-yellow">Revolution</span> with a Vision
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
              NAS Revolution Centre offers comprehensive education for grades 6-12 across ICSE, CBSE, WBBSE and Urdu boards, 
              with a focus on academic excellence and personal development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="btn-secondary">
                Explore Our Courses
              </Link>
              <Link href="/admissions" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                Apply Now
              </Link>
            </div>
            
            <div className="flex items-center gap-x-6 mt-4">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="inline-block rounded-full overflow-hidden border-2 border-white h-10 w-10 bg-gray-300">
                    <div className="h-full w-full bg-gray-300"></div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm">Trusted by 1000+ Students</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
            {/* We're using a placeholder div instead of an image since we don't have the actual files yet */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <h3 className="text-2xl font-bold mb-2">NAS Revolution Centre</h3>
                <p className="text-lg mb-4">Ignite Your Potential</p>
                <p className="text-sm">For Classes 6-12 (ICSE-CBSE-WBBSE-URDU BOARD)</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-brand-blue font-bold text-lg">Admissions Open!</h3>
                  <p className="text-sm text-gray-600">For Classes 6-12 (All Boards)</p>
                </div>
                <Link href="/admissions" className="bg-brand-yellow text-brand-dark px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity">
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 