import client1 from "@/assets/clients/client-1.png";
import client2 from "@/assets/clients/client-2.png";
import client3 from "@/assets/clients/client-3.png";
import client4 from "@/assets/clients/client-4.png";
import client5 from "@/assets/clients/client-5.png";
import client6 from "@/assets/clients/client-6.png";

const ClientLogos = () => {
  const clients = [
    { src: client1, alt: "TechCorp Solutions" },
    { src: client2, alt: "Global Dynamics" },
    { src: client3, alt: "SecureDefense Systems" },
    { src: client4, alt: "MediTech Innovations" },
    { src: client5, alt: "Capital Partners Group" },
    { src: client6, alt: "Aerospace Dynamics" },
  ];

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-background/50 to-background">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Clients</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Trusted by startups, creatives, and suits alike
        </p>
      </div>

      {/* Scrolling Client Logos */}
      <div className="relative">
        {/* Gradient Overlays for Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Continuous Scrolling Container */}
        <div className="flex animate-scroll-continuous">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 w-[280px] h-[120px] bg-background rounded-2xl flex items-center justify-center p-6 border border-border/40"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 w-[280px] h-[120px] bg-background rounded-2xl flex items-center justify-center p-6 border border-border/40"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
