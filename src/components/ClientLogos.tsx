import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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

  const autoplayPlugin = Autoplay({
    delay: 0,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <section className="py-20 overflow-hidden bg-white relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900/10 rounded-full border border-blue-700/20 mb-6">
          <span className="text-2xl">🤝</span>
          <span className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
            Our Clients&apos; Partners
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900">
          Collaborating with Government Leaders
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[autoplayPlugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 [animation:scroll-continuous_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <CarouselItem key={index} className="pl-4 basis-auto">
                <div className="flex items-center justify-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden bg-white shadow-md border-2 border-blue-900/10">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientLogos;
