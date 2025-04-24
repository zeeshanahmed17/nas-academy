import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | NAS Revolution Centre',
  description: 'Learn about how NAS Revolution Centre collects, uses, and protects your personal information.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Privacy Policy"
        subtitle="Learn how we collect, use, and protect your personal information"
        breadcrumbs={[
          { label: 'Privacy Policy', href: '/privacy-policy' }
        ]}
      />

      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose max-w-none">
              <h2>Privacy Policy for NAS Revolution Centre</h2>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
              
              <h3>1. Introduction</h3>
              <p>
                Welcome to NAS Revolution Centre. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>

              <h3>2. The Data We Collect About You</h3>
              <p>
                Personal data, or personal information, means any information about an individual from which that person can be identified. 
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, date of birth.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
              </ul>

              <h3>3. How We Collect Your Personal Data</h3>
              <p>We use different methods to collect data from and about you including through:</p>
              <ul>
                <li><strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
                <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
              </ul>

              <h3>4. How We Use Your Personal Data</h3>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul>
                <li>To register you as a new customer.</li>
                <li>To process and deliver your service.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our website, products/services, marketing, or customer relationships.</li>
                <li>To recommend products or services which may be of interest to you.</li>
              </ul>

              <h3>5. Data Security</h3>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal 
                data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>

              <h3>6. Data Retention</h3>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h3>7. Your Legal Rights</h3>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>

              <h3>8. Changes to the Privacy Policy</h3>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new 
                privacy policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>

              <h3>9. Contact Us</h3>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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