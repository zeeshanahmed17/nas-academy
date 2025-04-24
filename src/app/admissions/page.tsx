import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Phone, Calendar, CheckCircle, Users } from 'lucide-react';

export const metadata = {
  title: 'Admissions | NAS Revolution Centre',
  description: 'Apply for admission to NAS Revolution Centre. Admissions are open now for classes 6-12 across ICSE, CBSE, WBBSE, and Urdu boards.'
};

export default function AdmissionsPage() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Admissions"
        highlightedWord="Admissions"
        subtitle="Join NAS Revolution Centre for exceptional education with personalized attention."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' }
        ]}
      />

      {/* Admissions Open Banner */}
      <section className="py-8 bg-brand-blue">
        <div className="container-custom text-center">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-yellow text-brand-dark py-2 px-6 font-bold transform rotate-45 translate-x-8 -translate-y-0">
              Open Now!
            </div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Admissions are Open Now!</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
              We're currently accepting applications for all classes from 6th to 12th across ICSE, CBSE, WBBSE, and Urdu boards.
              Secure your child's future with NAS Revolution Centre's quality education and personalized approach.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
              <a href="tel:+919073040840" className="btn-primary flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Apply Now (Call Us)
              </a>
              <Link href="/contact" className="bg-brand-dark text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-brand-dark mb-4">Why Choose <span className="text-brand-blue">NAS Revolution Centre</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide a supportive and stimulating environment where students can thrive academically and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Quality Education</h3>
              <p className="text-gray-600">
                Our experienced faculty ensures high-quality education across multiple boards including ICSE, CBSE, WBBSE, and Urdu Board, with a focus on academic excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Small Batch Sizes</h3>
              <p className="text-gray-600">
                We maintain small batch sizes to ensure each student receives personalized attention, allowing our teachers to address individual learning needs effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                Beyond academics, we provide career guidance and prepare students for competitive exams like JEE and WBJEE, ensuring they are well-equipped for future challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Calendar className="h-12 w-12 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Regular Assessment</h3>
              <p className="text-gray-600">
                We conduct regular tests and assessments to track student progress, providing timely feedback to both students and parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-brand-dark mb-4">Admission <span className="text-brand-blue">Process</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our simple admission process is designed to make your experience smooth and hassle-free.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-brand-blue -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Contact Us</h3>
                <p className="text-gray-600">
                  Call us at +91 90730 40840 or visit our centre to inquire about admissions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Assessment</h3>
                <p className="text-gray-600">
                  A simple assessment to understand your child's current academic level and learning needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Registration</h3>
                <p className="text-gray-600">
                  Complete the registration process by filling out the necessary forms and paying the fees.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Welcome!</h3>
                <p className="text-gray-600">
                  Your child is now a part of NAS Revolution Centre family, ready to begin their educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Begin? Admissions are Open Now!</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            Take the first step towards a brighter future for your child. Contact us today using the options below.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:+919073040840" className="bg-white text-brand-blue px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now: +91 90730 40840
            </a>
            <Link href="/contact" className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 