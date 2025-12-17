import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Meal Saver logo" className="h-9 md:h-10 w-auto object-contain" />
              <span className="font-bold text-xl text-foreground">Meal Saver</span>
            </Link>
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Legal
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
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
                  Welcome to Meal Saver. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Meal Saver is a technology platform that connects users with restaurants offering surplus food at discounted prices. We do not prepare, deliver, or handle any food items.
                </p>
              </section>

              {/* User Responsibilities */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">As a user of Meal Saver, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information during registration and transactions</li>
                  <li>Pick up your orders within the specified time window</li>
                  <li>Treat restaurant staff with respect and courtesy</li>
                  <li>Not misuse the platform for fraudulent activities</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Report any issues with orders promptly through proper channels</li>
                </ul>
              </section>

              {/* Restaurant Responsibilities */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Restaurant (Merchant) Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">Restaurants registered on Meal Saver agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintain valid FSSAI licenses and comply with all food safety regulations</li>
                  <li>Ensure all listed food items are fresh, safe, and suitable for consumption</li>
                  <li>Accurately describe food items, including ingredients and allergen information</li>
                  <li>Honor all confirmed orders and provide food as described</li>
                  <li>Handle customer complaints professionally and provide refunds when appropriate</li>
                  <li>Not list expired, spoiled, or unsafe food items</li>
                </ul>
              </section>

              {/* Platform Usage */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Platform Usage Rules</h2>
                <p className="text-muted-foreground leading-relaxed">When using Meal Saver, you must not:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Create multiple accounts or impersonate others</li>
                  <li>Attempt to manipulate prices, ratings, or reviews</li>
                  <li>Use automated systems or bots to access the platform</li>
                  <li>Share your account credentials with third parties</li>
                  <li>Engage in any activity that disrupts or interferes with the platform</li>
                  <li>Violate any intellectual property rights of Meal Saver or third parties</li>
                </ul>
              </section>

              {/* Payments */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Payments and Transactions</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All payments are processed securely through UPI via WhatsApp</li>
                  <li>Prices displayed are final and inclusive of all applicable taxes</li>
                  <li>Payment confirms your reservation; orders are non-transferable</li>
                  <li>Meal Saver reserves the right to cancel suspicious transactions</li>
                </ul>
              </section>

              {/* Limitations of Liability */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Limitations of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver acts solely as an intermediary platform connecting users with restaurants. We expressly disclaim liability for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Quality, safety, or quantity of food provided by restaurants</li>
                  <li>Any illness, allergic reactions, or health issues arising from food consumption</li>
                  <li>Restaurant's failure to fulfill orders or provide accurate information</li>
                  <li>Any disputes between users and restaurants</li>
                  <li>Loss of data, interruption of service, or technical issues</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Meal Saver's total liability exceed the amount paid for the specific transaction in question.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Dispute Resolution</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>For food-related complaints, users should first contact the restaurant directly</li>
                  <li>If unresolved, users may escalate to Meal Saver at saplinxai@gmail.com</li>
                  <li>We will mediate disputes in good faith but are not obligated to provide resolution</li>
                  <li>Any legal disputes shall be governed by the laws of India and subject to the exclusive jurisdiction of courts in Bangalore</li>
                </ul>
              </section>

              {/* Termination */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Account Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver reserves the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or abuse the platform. Users may also delete their accounts at any time by contacting support.
                </p>
              </section>

              {/* Changes */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms and Conditions from time to time. Continued use of the platform after changes constitutes acceptance of the modified terms. We encourage users to review this page periodically.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:saplinxai@gmail.com" className="text-primary hover:underline">
                    saplinxai@gmail.com
                  </a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
