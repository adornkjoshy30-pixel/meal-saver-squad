import PageSEO from "@/components/PageSEO";
import { contact } from "@/config/appConfig";

const Terms = () => {
  return (
    <div className="min-h-dvh bg-background">
      <PageSEO
        title="Terms of Service | Meal Saver"
        description="Read the Terms of Service for MealSaver, a WhatsApp-first surplus food deal communication platform connecting restaurants with customers in Kerala."
        path="/terms"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Legal
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: March 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              {/* 1. Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver helps connect restaurants with customers by sharing information about surplus food deals. Restaurants send details of unsold meals that are still safe to consume, and Meal Saver publishes these deals through its website and WhatsApp channels so customers can discover them.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using the Meal Saver website or joining any Meal Saver WhatsApp channel, you agree to these Terms of Service. Please read them carefully before using our service.
                </p>
              </section>

              {/* 2. Role of MealSaver */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Role of Meal Saver</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver acts <strong className="text-foreground">only as a communication and promotion platform</strong>. Our role is limited to sharing surplus food deal information provided by restaurants.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver does <strong className="text-foreground">not</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Prepare food</li>
                  <li>Store food</li>
                  <li>Deliver food</li>
                  <li>Sell food</li>
                  <li>Process payments</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  All food is prepared and sold by the participating restaurant. Customers interact directly with restaurants for purchasing and pickup.
                </p>
              </section>

              {/* 3. How Deals Work */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. How Deals Work</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The surplus food deal process works as follows:
                </p>
                <ul className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Restaurants send surplus food deal information to Meal Saver</li>
                  <li>Meal Saver may verify the information before publishing</li>
                  <li>The deal is shared through WhatsApp channels and/or the website</li>
                  <li>Customers reserve portions via WhatsApp message</li>
                  <li>Customers visit the restaurant directly to collect the food</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Deals are time-sensitive and limited in quantity.</strong> Availability depends entirely on the restaurant.
                </p>
              </section>

              {/* 4. Payments */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Payments</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All payments for surplus food deals happen <strong className="text-foreground">directly between the customer and the restaurant</strong>. Meal Saver:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Does not handle or process payments</li>
                  <li>Does not act as a payment intermediary</li>
                  <li>Does not collect money from customers on behalf of restaurants</li>
                </ul>
              </section>

              {/* 5. Refunds and Complaints */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Refunds and Complaints</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Since Meal Saver does not process payments or sell food:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Refunds are handled <strong className="text-foreground">solely by the restaurant</strong></li>
                  <li>Meal Saver <strong className="text-foreground">does not issue refunds</strong></li>
                  <li>Meal Saver may help facilitate communication between customers and restaurants if needed</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Customers should contact the restaurant directly for issues related to food quality, incorrect orders, or payment disputes. Please refer to our{" "}
                  <a href="/refund" className="text-primary hover:underline">Refund &amp; Return Policy</a> for full details.
                </p>
              </section>

              {/* 6. Deal Availability */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Deal Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Surplus food deals are limited in nature and may sell out quickly. Restaurants control the final availability of each deal. Meal Saver <strong className="text-foreground">cannot guarantee</strong> that a deal will still be available when a customer arrives at the restaurant.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Reserving via WhatsApp helps secure your portion, but availability is ultimately determined by the restaurant.
                </p>
              </section>

              {/* 7. Restaurant Responsibility */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Restaurant Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Participating restaurants are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Food safety and hygiene standards</li>
                  <li>Food preparation and quality</li>
                  <li>Compliance with local food laws and FSSAI regulations</li>
                  <li>Honoring the deals they provide to Meal Saver</li>
                  <li>Accurate representation of food items, pricing, and availability</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver does not inspect, control, or supervise restaurant operations.
                </p>
              </section>

              {/* 8. Customer Responsibility */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Customer Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Customers using Meal Saver must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Arrive at the restaurant during the specified pickup time</li>
                  <li>Treat restaurant staff with respect and courtesy</li>
                  <li>Follow deal instructions shared via WhatsApp</li>
                  <li>Reserve portions via WhatsApp message before visiting the restaurant</li>
                  <li>Confirm deal availability with the restaurant if necessary</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Failure to follow pickup instructions may result in the deal being unavailable, and no refund will be applicable in such cases.
                </p>
              </section>

              {/* 9. Limitation of Liability */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver acts solely as a communication platform and shall <strong className="text-foreground">not be liable</strong> for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Food quality or safety issues</li>
                  <li>Allergic reactions or health issues arising from food consumption</li>
                  <li>Incorrect orders or wrong food items</li>
                  <li>Deal availability or sold-out situations</li>
                  <li>Restaurant service quality or staff behaviour</li>
                  <li>Payment disputes between customers and restaurants</li>
                  <li>Loss of data, service interruptions, or technical issues</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  By using Meal Saver, customers accept that <strong className="text-foreground">restaurants are the sellers of the food</strong> and that Meal Saver's role is limited to sharing deal information.
                </p>
              </section>

              {/* 10. Service Changes */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Service Changes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver may update its services as the platform evolves. Features, communication channels, and processes may change at any time. We will communicate significant changes through our website or WhatsApp channels.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Continued use of Meal Saver after changes constitutes acceptance of the updated terms.
                </p>
              </section>

              {/* 11. Termination */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver may suspend or remove users who misuse the service or WhatsApp channels. This includes, but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Sending spam or irrelevant messages in WhatsApp channels</li>
                  <li>Engaging in fraudulent or abusive behaviour</li>
                  <li>Impersonating restaurants or other users</li>
                  <li>Violating any of these Terms of Service</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Users may also leave WhatsApp channels or stop using the platform at any time.
                </p>
              </section>

              {/* 12. Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
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

export default Terms;
