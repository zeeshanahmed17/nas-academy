import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | NAS Revolution Centre',
  description: 'Read the terms and conditions governing the use of NAS Revolution Centre services and website.'
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services"
        breadcrumbs={[
          { label: 'Terms of Service', href: '/terms-of-service' }
        ]}
      />

      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose max-w-none">
              <h2>Terms of Service for NAS Revolution Centre</h2>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
              
              <h3>1. Introduction</h3>
              <p>
                Welcome to NAS Revolution Centre. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, 
                you may not access our services.
              </p>

              <h3>2. Definitions</h3>
              <ul>
                <li><strong>&quot;Service&quot;</strong> refers to the educational services provided by NAS Revolution Centre.</li>
                <li><strong>&quot;Website&quot;</strong> refers to the website operated by NAS Revolution Centre.</li>
                <li><strong>&quot;User,&quot; &quot;You,&quot; and &quot;Your&quot;</strong> refers to the individual accessing or using the Service.</li>
                <li><strong>&quot;We,&quot; &quot;Us,&quot; and &quot;Our&quot;</strong> refers to NAS Revolution Centre.</li>
              </ul>

              <h3>3. Use of Our Service</h3>
              <p>You agree to use our Service solely for lawful purposes and in a way that does not infringe upon the rights of others or inhibit their use and enjoyment of the Service.</p>
              
              <h3>4. Educational Services</h3>
              <p>
                NAS Revolution Centre provides educational services for students in classes 6 to 12 across various boards including 
                ICSE, CBSE, WBBSE, and Urdu Board. Our services include but are not limited to:
              </p>
              <ul>
                <li>Regular tuition classes</li>
                <li>Competitive exam preparation</li>
                <li>Career guidance services</li>
                <li>Educational resources and materials</li>
              </ul>

              <h3>5. Registration and Admission</h3>
              <p>
                To access certain services, you may be required to register for admission. You agree to provide accurate, 
                current, and complete information during the registration process and to update such information to keep it 
                accurate, current, and complete.
              </p>

              <h3>6. Fees and Payment</h3>
              <p>
                All fees for our educational services are as stated at the time of registration or admission. Payment must be made 
                according to the terms specified during admission. We reserve the right to modify our fees with reasonable notice.
              </p>

              <h3>7. Intellectual Property</h3>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of 
                NAS Revolution Centre and its licensors. The Service is protected by copyright, trademark, and other laws. 
                Our trademarks and trade dress may not be used in connection with any product or service without the prior 
                written consent of NAS Revolution Centre.
              </p>

              <h3>8. User Responsibilities</h3>
              <p>As a user of our services, you are responsible for:</p>
              <ul>
                <li>Attending classes regularly as per the schedule</li>
                <li>Completing assignments and homework</li>
                <li>Maintaining discipline and respecting faculty and fellow students</li>
                <li>Adhering to all rules and regulations of NAS Revolution Centre</li>
              </ul>

              <h3>9. Termination</h3>
              <p>
                We may terminate or suspend your access to our Service immediately, without prior notice, for conduct that we 
                believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other 
                reason at our sole discretion.
              </p>

              <h3>10. Limitation of Liability</h3>
              <p>
                In no event shall NAS Revolution Centre, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
                inability to access or use the Service.
              </p>

              <h3>11. Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice 
                of any changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of 
                our Service after any such changes constitutes your acceptance of the new Terms.
              </p>

              <h3>12. Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict 
                of law provisions.
              </p>

              <h3>13. Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <address>
                <strong>NAS Revolution Centre</strong><br />
                28/B/1/7 Dr.M.N.Chatterjee Sarani (Inside Churi Gali)<br />
                Raja Bazar Kolkata - 9<br />
                <Link href="mailto:contact@nasrevolution.com" className="text-brand-blue hover:underline">
                  contact@nasrevolution.com
                </Link><br />
                <Link href="tel:+919073040840" className="text-brand-blue hover:underline">
                  +91 90730 40840
                </Link>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 