import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";

const Refund = () => {
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
              Refund Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                <p className="text-muted-foreground">
                  Meal Saver is a technology platform that connects users with restaurants. We <strong className="text-foreground">do not prepare, deliver, or handle food</strong>. Food quality, safety, quantity, and accuracy are the <strong className="text-foreground">sole responsibility of the restaurant (merchant)</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              
              {/* Scope */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Scope of This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Refund Policy outlines the conditions under which refunds may be issued for transactions made through Meal Saver. Please read this policy carefully before making a purchase.
                </p>
              </section>

              {/* Restaurant Responsibility */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Restaurant Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All restaurants (merchants) on Meal Saver are required to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintain valid FSSAI licenses and comply with food safety regulations</li>
                  <li>Ensure food quality, freshness, and safety at all times</li>
                  <li>Accurately describe food items, portions, and ingredients</li>
                  <li>Honor all confirmed orders during the specified pickup window</li>
                  <li>Handle refund requests professionally and fairly</li>
                  <li>Follow strict operational and quality standards set by Meal Saver</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver reserves the right to enforce compliance, including suspending or removing restaurants that fail to meet these standards.
                </p>
              </section>

              {/* Eligible Refunds */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Refunds for Platform-Related Issues</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver will process refunds only for issues directly related to our platform, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Failed Payments:</strong> If payment was deducted but the order was not confirmed</li>
                  <li><strong className="text-foreground">Double Charges:</strong> If you were charged multiple times for the same order</li>
                  <li><strong className="text-foreground">Technical Errors:</strong> System glitches that prevented order completion</li>
                  <li><strong className="text-foreground">Restaurant No-Show:</strong> If a restaurant cancels after payment (verified case)</li>
                </ul>
              </section>

              {/* Non-Eligible Refunds */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Non-Eligible Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver is <strong className="text-foreground">not responsible</strong> for refunds related to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Food quality, taste, or preparation issues</li>
                  <li>Food safety concerns or illness claims</li>
                  <li>Incorrect or missing items in the order</li>
                  <li>Portion size or quantity disputes</li>
                  <li>Allergen-related issues</li>
                  <li>User's failure to pick up within the specified time window</li>
                  <li>Change of mind after order confirmation</li>
                  <li>Dissatisfaction with the surprise box contents</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  For these issues, please contact the restaurant directly. If unresolved, you may escalate to Meal Saver for mediation.
                </p>
              </section>

              {/* How to Request */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To request a refund for platform-related issues:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Email us at <a href="mailto:saplinxai@gmail.com" className="text-primary hover:underline">saplinxai@gmail.com</a></li>
                  <li>Include your order details (order ID, restaurant name, date)</li>
                  <li>Describe the issue clearly with any supporting evidence</li>
                  <li>Provide your UPI ID for refund processing</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed">
                  Refund requests must be submitted within <strong className="text-foreground">48 hours</strong> of the transaction.
                </p>
              </section>

              {/* Processing Time */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Refund Processing</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Approved refunds will be processed within <strong className="text-foreground">5-7 business days</strong></li>
                  <li>Refunds will be credited to the original payment method (UPI)</li>
                  <li>You will receive a confirmation email once the refund is processed</li>
                  <li>Bank processing times may vary; allow additional days for the amount to reflect</li>
                </ul>
              </section>

              {/* Disputes */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For food-related complaints:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Contact the Restaurant First:</strong> Most issues can be resolved directly with the merchant</li>
                  <li><strong className="text-foreground">Document the Issue:</strong> Take photos if there are quality or quantity concerns</li>
                  <li><strong className="text-foreground">Escalate to Meal Saver:</strong> If the restaurant is unresponsive, email us for mediation</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver will review cases and may take action against restaurants that repeatedly violate quality standards, including issuing refunds from restaurant deposits where applicable.
                </p>
              </section>

              {/* Enforcement */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Restaurant Compliance Enforcement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver enforces strict quality and operational standards. Restaurants that fail to comply may face:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Warnings and required corrective action</li>
                  <li>Temporary suspension from the platform</li>
                  <li>Permanent removal for repeated violations</li>
                  <li>Deductions from security deposits for user refunds</li>
                </ul>
              </section>

              {/* Final Clause */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Final Provisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver reserves the right to modify this Refund Policy at any time. All refund decisions made by Meal Saver are final. By using our platform, you agree to this policy.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For refund requests or questions about this policy:
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:saplinxai@gmail.com" className="text-primary hover:underline">
                    saplinxai@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> Within 24-48 hours (Monday–Friday, 9 AM–6 PM IST)
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

export default Refund;
