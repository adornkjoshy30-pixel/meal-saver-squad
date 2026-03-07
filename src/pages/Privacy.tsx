import PageSEO from "@/components/PageSEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Privacy Policy | Meal Saver"
        description="Learn how Meal Saver collects, uses, and protects your personal information when using our surplus food platform in Kerala."
        path="/privacy"
      />

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Legal
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              
              {/* Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Meal Saver, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.
                </p>
              </section>

              {/* Data Collection */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">We may collect the following types of information:</p>
                
                <h3 className="text-xl font-semibold text-foreground mt-4">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and contact details (phone number, email address)</li>
                  <li>Location data for finding nearby restaurants</li>
                  <li>Payment information (processed securely via UPI)</li>
                  <li>Order history and preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-4">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Device information (type, operating system, browser)</li>
                  <li>IP address and approximate location</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* Data Usage */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Facilitate connections between you and restaurants</li>
                  <li>Process and manage your orders and payments</li>
                  <li>Send order confirmations and important updates</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Personalize your experience and show relevant deals</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Detect and prevent fraud or unauthorized access</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Restaurant Partners:</strong> To fulfill your orders (name, contact, order details)</li>
                  <li><strong className="text-foreground">Payment Processors:</strong> To securely process transactions</li>
                  <li><strong className="text-foreground">Service Providers:</strong> Third parties who help operate our platform</li>
                  <li><strong className="text-foreground">Legal Authorities:</strong> When required by law or to protect our rights</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information to third parties for marketing purposes.
                </p>
              </section>

              {/* Data Security */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure payment processing through trusted providers</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls limiting who can view your data</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Cookies */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Enable essential platform functionality</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You can manage cookie preferences through your browser settings, though some features may not work properly if cookies are disabled.
                </p>
              </section>

              {/* Data Retention */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy. We may retain certain data longer for legal, accounting, or fraud prevention purposes.
                </p>
              </section>

              {/* Your Rights */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong className="text-foreground">Portability:</strong> Receive your data in a portable format</li>
                  <li><strong className="text-foreground">Objection:</strong> Object to certain processing activities</li>
                  <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw previously given consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  To exercise these rights, contact us at hello@mealsaver.in.
                </p>
              </section>

              {/* GDPR Compliance */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. GDPR Compliance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). We process your data based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Your consent for marketing communications</li>
                  <li>Contract performance for order fulfillment</li>
                  <li>Legitimate interests for platform improvement</li>
                  <li>Legal obligations for compliance requirements</li>
                </ul>
              </section>

              {/* Children's Privacy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.
                </p>
              </section>

              {/* Changes */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">11. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our platform. Your continued use after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about this Privacy Policy or to exercise your data rights, please contact us:
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:hello@mealsaver.in" className="text-primary hover:underline">
                    hello@mealsaver.in
                  </a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Privacy;
