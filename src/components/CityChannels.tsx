import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import { whatsapp } from "@/config/appConfig";

const cities = [
  {
    name: "Idukki",
    description: "Kattappana, Thodupuzha, Cheruthoni, Adimaly & more",
    link: whatsapp.channelUrl,
    status: "Live",
  },
  {
    name: "Kochi",
    description: "Ernakulam, Kakkanad, Edappally & more",
    link: whatsapp.channelUrl,
    status: "Coming Soon",
  },
  {
    name: "Trivandrum",
    description: "Technopark, Pattom, Kowdiar & more",
    link: whatsapp.channelUrl,
    status: "Coming Soon",
  },
  {
    name: "Calicut",
    description: "SM Street, Palayam, Mankavu & more",
    link: whatsapp.channelUrl,
    status: "Coming Soon",
  },
];

const CityChannels = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            WhatsApp Channels
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Join Deals in Your City
          </h2>
          <p className="text-lg text-muted-foreground">
            Each city has its own WhatsApp channel. Join yours to receive surplus food deals from restaurants near you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{city.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{city.description}</p>
              </div>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                city.status === "Live" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {city.status}
              </span>
              <div>
                <a href={city.link} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant={city.status === "Live" ? "whatsapp" : "whatsapp-outline"} 
                    size="sm" 
                    className="w-full"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    {city.status === "Live" ? "Join Channel" : "Get Notified"}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityChannels;
