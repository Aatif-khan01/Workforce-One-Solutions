import { Link } from "react-router-dom";
import { ArrowRight, Users, FileText, Briefcase, Code, CheckCircle, Target, Zap, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScheduleMeetingSection from "@/components/ScheduleMeetingSection";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedBox from "@/components/AnimatedBox";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import StatCounter from "@/components/StatCounter";
import ImageGridInfo from "@/components/ImageGridInfo";
import ClientLogos from "@/components/ClientLogos";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-home.jpg";
import clientSuccessImage from "@/assets/client-success.jpg";
import galleryTechWork from "@/assets/gallery-tech-work-1.jpg";
import galleryBuilding from "@/assets/gallery-building-1.jpg";
import galleryTeam from "@/assets/gallery-team-1.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceRecruitment from "@/assets/service-recruitment.jpg";
import serviceStaffing from "@/assets/service-staffing.jpg";
import serviceSoftware from "@/assets/service-software.jpg";

const Home = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Successful Proposals" },
    { value: 1200, suffix: "+", label: "Professionals Recruited" },
    { value: 50000, suffix: "+", label: "Hours Delivered" },
    { value: 98, suffix: "%", label: "Client Retention" },
  ];

  const values = [
    "Businesses grow faster when talent and strategy align.",
    "Recruitment isn't about filling positions; it's about building capability.",
    "Great proposals start with deep understanding and sharp storytelling.",
    "You don't need more resources; you need the right ones.",
  ];

  const services = [
    {
      icon: FileText,
      title: "Strategic Proposal Development",
      description: "From government bids to corporate contracts, we help you craft proposals that win.",
      link: "/services/proposal",
      gradient: "from-accent to-accent-glow",
      image: serviceProposal,
    },
    {
      icon: Users,
      title: "Cleared Recruitment",
      description: "We specialize in sourcing and vetting security-cleared professionals for sensitive projects.",
      link: "/services/recruitment",
      gradient: "from-secondary to-coral",
      image: serviceRecruitment,
    },
    {
      icon: Briefcase,
      title: "Workforce Staffing",
      description: "Flexible staffing built for today's evolving business needs.",
      link: "/services/staffing",
      gradient: "from-coral to-secondary",
      image: serviceStaffing,
    },
    {
      icon: Code,
      title: "Software Development",
      description: "We build scalable, secure, and high-performance software solutions tailored to your organization.",
      link: "/services/software",
      gradient: "from-accent-glow to-accent",
      image: serviceSoftware,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ✅ NEW PREMIUM HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ✅ LEFT SIDE */}
            <div className="space-y-6 max-w-xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                Workforce One
                <br />
                <span className="text-white/90 text-4xl md:text-5xl font-light">
                  Solutions
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Empowering businesses through talent, strategy and innovation.
              </p>

              {/* ✅ BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    className="group bg-black/90 hover:bg-black text-white text-lg px-10 py-6 w-full sm:w-auto rounded-xl"
                  >
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-6 w-full sm:w-auto border-2 border-white/80 text-white hover:bg-white hover:text-black rounded-xl"
                  >
                    Explore Services
                  </Button>
                </Link>

              </div>
            </div>

            {/* ✅ RIGHT SIDE — PREMIUM HEXAGONS */}
            <div className="relative h-[420px] flex items-center justify-center">

              {/* CENTER */}
              <div className="absolute w-36 h-36 bg-gradient-to-br from-emerald-500 to-[#18cb96] clip-hex shadow-xl flex items-center justify-center">
                <Users size={40} className="text-white" />
              </div>

              {/* TOP LEFT */}
              <div className="absolute -top-20 -left-12 w-32 h-32 bg-gradient-to-br from-accent to-accent-glow clip-hex shadow-xl flex items-center justify-center">
                <FileText size={34} className="text-white" />
              </div>

              {/* TOP RIGHT */}
              <div className="absolute -top-20 left-36 w-32 h-32 bg-gradient-to-br from-secondary to-coral clip-hex shadow-xl flex items-center justify-center">
                <Briefcase size={34} className="text-white" />
              </div>

              {/* BOTTOM LEFT */}
              <div className="absolute top-44 -left-12 w-32 h-32 bg-gradient-to-br from-coral to-secondary clip-hex shadow-xl flex items-center justify-center">
                <Code size={34} className="text-white" />
              </div>

              {/* BOTTOM RIGHT */}
              <div className="absolute top-44 left-36 w-32 h-32 bg-gradient-to-br from-emerald-500 to-[#18cb96] clip-hex shadow-xl flex items-center justify-center">
                <Target size={34} className="text-white" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ✅ STATS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <StaggeredAnimation className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} className="p-6 text-center border border-accent/20" hover={false}>
                <StatCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
              </AnimatedCard>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* ✅ CLIENT LOGOS */}
      <ClientLogos />

      {/* ✅ SERVICES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <StaggeredAnimation className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <AnimatedCard className="p-0 h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute top-6 left-6 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <service.icon size={28} className="text-white" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* ✅ Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">What We Believe</h2>

            <div className="space-y-6">
              {values.map((value, index) => (
                <AnimatedBox key={index} animation="slideInLeft" delay={400 + index * 150}>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">{value}</p>
                  </div>
                </AnimatedBox>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* ✅ IMAGE GRID */}
      <ImageGridInfo
        images={[
          { src: galleryTechWork, alt: "Technology" },
          { src: galleryBuilding, alt: "Building" },
          { src: galleryTeam, alt: "Team" },
        ]}
        title="Workforce One Solution"
        subtitle="Delivering Excellence in Every Engagement"
        sections={[
          {
            title: "About Us",
            icon: <Target size={24} />,
            content:
              "We help organizations win contracts, hire top talent, and build custom technology solutions.",
          },
          {
            title: "Our Vision",
            icon: <Zap size={24} />,
            content:
              "To be the most trusted workforce and technology partner for mission-critical operations.",
          },
          {
            title: "Our Mission",
            icon: <Shield size={24} />,
            content:
              "To deliver specialized expertise that bridges the gap between opportunity and execution.",
          },
        ]}
      />

      {/* ✅ CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedCard className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The future belongs to companies that combine people, process, and technology.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary px-12 py-6 group">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      <ScheduleMeetingSection />
      <Footer />
    </div>
  );
};

export default Home;
