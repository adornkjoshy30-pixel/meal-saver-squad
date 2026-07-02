import PageSEO from "@/components/PageSEO";
import { contact } from "@/config/appConfig";

const DealPolicy = () => {
  return (
    <div className="min-h-dvh bg-background">
      <PageSEO
        title="Restaurant Deal Accuracy & Commitment Policy | Meal Saver"
        description="Meal Saver's policy for restaurant partners on deal accuracy, commitment to honour published deals, and maintaining customer trust."
        path="/deal-policy"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Partner Policy
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Restaurant Deal Accuracy &amp; Commitment Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: March 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              {/* 1. Purpose */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Purpose of the Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver shares surplus food deals with customers through its website and WhatsApp channels. Accurate deal information is essential for maintaining trust between restaurants, customers, and the platform.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants must provide reliable information about surplus food deals. Publishing inaccurate deals can harm customers and the reputation of both the restaurant and the Meal Saver platform.
                </p>
              </section>

              {/* 2. Accurate Deal Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Accurate Deal Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants must ensure that the following information is correct before submitting a deal:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Restaurant name and pickup location</li>
                  <li>Food item or meal type</li>
                  <li>Quantity available</li>
                  <li>Discounted price</li>
                  <li>Pickup time window</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants should <strong className="text-foreground">only submit deals when the food is actually available</strong> and ready for pickup within the stated time window.
                </p>
              </section>

              {/* 3. Commitment to Honor Deals */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Commitment to Honour Posted Deals</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants agree to honour any deal that has been published by Meal Saver. Specifically:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>If customers arrive during the stated pickup time and the deal quantity is still available, the restaurant must provide the food at the published price</li>
                  <li>Restaurants should <strong className="text-foreground">not change the price or conditions</strong> after a deal has been published</li>
                  <li>Restaurants should not refuse service to customers who arrive through Meal Saver</li>
                </ul>
              </section>

              {/* 4. Handling Sold-Out Deals */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Handling Sold-Out Deals</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If the food becomes unavailable before customers arrive, restaurants should:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Notify Meal Saver as soon as possible so the deal can be updated or removed</li>
                  <li>Stop accepting additional customers for that deal</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants should only submit deals when they are confident that the food will be available for the entire pickup window.
                </p>
              </section>

              {/* 5. Repeated Inaccurate Deals */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Repeated Inaccurate Deals</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To protect customer trust, Meal Saver may take action if a restaurant repeatedly provides inaccurate deal information. Possible actions include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Temporary suspension from the platform</li>
                  <li>Removal from WhatsApp deal channels</li>
                  <li>Termination of the partnership</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Meal Saver will communicate with the restaurant before taking any action and provide an opportunity to resolve issues.
                </p>
              </section>

              {/* 6. Customer Experience Expectations */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Customer Experience Expectations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants should treat customers arriving through Meal Saver with the same professionalism as regular customers. Customers should be able to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Easily identify and claim the deal</li>
                  <li>Purchase the food at the listed price without negotiation</li>
                  <li>Complete the pickup within the stated time window</li>
                </ul>
              </section>

              {/* 7. Communication with MealSaver */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Communication with Meal Saver</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants should inform Meal Saver immediately if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The deal sells out earlier than expected</li>
                  <li>Pickup times need to change</li>
                  <li>The deal must be cancelled</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Timely communication allows Meal Saver to update customers and maintain trust across all channels.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about this policy, restaurants can reach us at:
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
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

export default DealPolicy;
