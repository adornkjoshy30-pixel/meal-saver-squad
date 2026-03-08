import { AlertTriangle } from "lucide-react";
import PageSEO from "@/components/PageSEO";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Refund & Return Policy | Meal Saver"
        description="Understand Meal Saver's refund policy for surplus food deals. MealSaver is a promotion platform — all payments are made directly to restaurants."
        path="/refund"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Legal
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Refund &amp; Return Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: March 2026
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                <p className="text-muted-foreground">
                  Meal Saver is a <strong className="text-foreground">promotion and communication platform</strong>. We share surplus food deal alerts from restaurants through our website and WhatsApp channels. We <strong className="text-foreground">do not sell food, process payments, or handle food preparation</strong>. All purchases are made directly at the restaurant.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              {/* 1. Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver shares surplus food deal alerts from restaurants through its website and WhatsApp channels. Restaurants provide the deal information, and customers visit the restaurant directly to purchase the food.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver does not process payments and does not handle food orders. Our role is limited to promoting available deals and facilitating communication between customers and restaurants.
                </p>
              </section>

              {/* 2. Payment Responsibility */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Payment Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All payments for surplus food deals are made directly to the restaurant by the customer. Please note:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Meal Saver <strong className="text-foreground">does not collect money</strong> from customers</li>
                  <li>Meal Saver <strong className="text-foreground">does not process any payments</strong></li>
                  <li>All transactions happen between the customer and the restaurant</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Since Meal Saver does not handle payments, <strong className="text-foreground">Meal Saver does not issue refunds directly</strong>.
                </p>
              </section>

              {/* 3. When Refunds May Be Allowed */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. When Refunds May Be Allowed</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds may be provided <strong className="text-foreground">only by the restaurant</strong>, not by Meal Saver. The restaurant may consider a refund in situations such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The restaurant confirmed a deal but refuses to honour the advertised price</li>
                  <li>The restaurant runs out of food despite confirming availability</li>
                  <li>The wrong food item is given to the customer</li>
                  <li>The food is clearly unsafe or spoiled</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  In these cases the restaurant may choose to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Refund the payment</li>
                  <li>Replace the food item</li>
                  <li>Provide an alternative</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver may assist in communication between the customer and the restaurant, but <strong className="text-foreground">does not guarantee refunds</strong>.
                </p>
              </section>

              {/* 4. When Refunds Are NOT Allowed */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. When Refunds Are NOT Allowed</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds are generally not applicable in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The deal has already sold out</li>
                  <li>The customer arrives after the specified pickup time</li>
                  <li>The customer changes their mind after reserving or purchasing</li>
                  <li>The customer does not like the taste of the food</li>
                  <li>The customer fails to follow pickup instructions shared via WhatsApp</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  These conditions are clearly communicated at the time of each deal to avoid misunderstandings.
                </p>
              </section>

              {/* 5. Deal Availability Disclaimer */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Deal Availability Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Surplus food deals are limited in nature. Please keep the following in mind:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Deals may <strong className="text-foreground">sell out quickly</strong> due to limited quantities</li>
                  <li>Restaurants control the <strong className="text-foreground">final availability</strong> of each deal</li>
                  <li>Restaurants may stop accepting reservations when the deal quantity is finished</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver <strong className="text-foreground">cannot guarantee availability</strong> of any deal. Reserving via WhatsApp helps secure your portion, but availability is ultimately determined by the restaurant.
                </p>
              </section>

              {/* 6. MealSaver's Role in Disputes */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Meal Saver's Role in Disputes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If a dispute arises between a customer and a restaurant, Meal Saver may help facilitate communication between both parties. However:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Meal Saver is <strong className="text-foreground">not responsible for issuing refunds</strong></li>
                  <li>Final decisions about refunds, replacements, or alternatives are made <strong className="text-foreground">solely by the restaurant</strong></li>
                  <li>Meal Saver reserves the right to remove restaurants that repeatedly fail to honour confirmed deals</li>
                </ul>
              </section>

              {/* 7. Customer Responsibility */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Customer Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To ensure a smooth experience, customers are expected to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Arrive at the restaurant during the <strong className="text-foreground">specified pickup time</strong></li>
                  <li>Confirm deal availability with the restaurant if necessary</li>
                  <li>Follow pickup instructions shared via WhatsApp</li>
                  <li>Reserve portions via WhatsApp message before visiting the restaurant</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Failure to follow these steps may result in the deal being unavailable, and no refund will be applicable in such cases.
                </p>
              </section>

              {/* 8. Final Provisions */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Final Provisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver reserves the right to modify this Refund &amp; Return Policy at any time. Changes will be reflected on this page with an updated date. By using our platform, you agree to this policy.
                </p>
              </section>

              {/* 9. Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about a deal or experience a problem with a restaurant, you can reach us at:
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:saplinxai@gmail.com" className="text-primary hover:underline">
                    saplinxai@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> Within 24–48 hours (Monday–Friday, 9 AM–6 PM IST)
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver may assist in communication but does not manage payments or food service.
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
