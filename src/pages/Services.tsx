import { Link } from "react-router-dom";
import { FileText, Users, Briefcase, Code, ArrowRight, Target, Zap, Shield, Check, Layers, Award, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedBox from "@/components/AnimatedBox";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import technologyNetworkImage from "@/assets/technology-network.jpg";
import galleryPresentation from "@/assets/gallery-presentation.jpg";
import galleryDevWork from "@/assets/gallery-dev-work.jpg";
import galleryConsultation from "@/assets/gallery-consultation.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceRecruitment from "@/assets/service-recruitment.jpg";
import serviceStaffing from "@/assets/service-staffing.jpg";
import serviceSoftware from "@/assets/service-software.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Proposal Development",
      description: "From concept to submission, our Proposal Development service turns your opportunities into winning bids.",
      link: "/services/proposal",
      gradient: "from-accent to-accent-glow",
      features: ["Market Research", "Capture Strategy", "Compliance Review", "Graphic Design"],
      image: serviceProposal,
    },
    {
      icon: Users,
      title: "Cleared Recruitment",
      description: "When project success hinges on security-cleared talent, our Cleared Recruitment service delivers.",
      link: "/services/recruitment",
      gradient: "from-secondary to-coral",
      features: ["Security Clearances", "Vetting Process", "Mission Ready", "Cultural Fit"],
      image: serviceRecruitment,
    },
    {
      icon: Briefcase,
      title: "Workforce Staffing",
      description: "Flexible, scalable talent solutions to meet your evolving business demands.",
      link: "/services/staffing",
      gradient: "from-coral to-secondary",
      features: ["Contract Support", "Direct Hire", "Team Buildouts", "Rapid Deployment"],
      image: serviceStaffing,
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications, enterprise systems and integrations tailored to your environment.",
      link: "/services/software",
      gradient: "from-accent-glow to-accent",
      features: ["Custom Development", "Enterprise Systems", "Cloud Solutions", "Ongoing Support"],
      image: serviceSoftware,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin with an in-depth understanding of your needs, goals and constraints.",
      icon: Target,
    },
    {
      number: "02",
      title: "Planning & Design",
      description: "We develop a customised roadmap, whether that's a bid strategy, recruitment campaign, staffing model or software architecture.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Execution & Delivery",
      description: "We activate the plan, carefully managing execution, quality, risk and stakeholder communication.",
      icon: Shield,
    },
    {
      number: "04",
      title: "Review & Optimize",
      description: "We monitor results, gather feedback, and refine the approach to ensure you're set up for sustained success.",
      icon: Check,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <AnimatedBox animation="fadeInUp" delay={200}>
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-accent via-accent-glow to-secondary bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
            </AnimatedBox>
            <AnimatedBox animation="fadeInUp" delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end execution with specialized talent and quality assurance built-in
              </p>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <StaggeredAnimation className="grid md:grid-cols-2 gap-8 mb-16" staggerDelay={200}>
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <AnimatedCard className="p-0 h-full overflow-hidden" animation="fadeInUp" delay={index * 200}>
                    <div className="relative h-72 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className={`absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 text-lg">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check size={16} className="text-accent flex-shrink-0 animate-pulse-slow" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-accent group-hover:translate-x-2 transition-transform">
                      <span className="font-semibold">Learn more</span>
                      <ArrowRight className="ml-2" size={20} />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="fadeInUp" delay={200} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
          </AnimatedBox>

          <StaggeredAnimation className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={150}>
            <AnimatedCard className="p-6 text-center" animation="scaleIn" delay={0}>
              <div className="text-4xl mb-4 animate-bounce-in">🎯</div>
              <h3 className="text-lg font-bold mb-2">End-to-End</h3>
              <p className="text-sm text-muted-foreground">Full lifecycle management from planning through delivery</p>
            </AnimatedCard>

            <AnimatedCard className="p-6 text-center" animation="scaleIn" delay={150}>
              <div className="text-4xl mb-4 animate-bounce-in" style={{ animationDelay: '0.2s' }}>⭐</div>
              <h3 className="text-lg font-bold mb-2">Specialized Talent</h3>
              <p className="text-sm text-muted-foreground">Experts in proposal, recruitment, staffing and software</p>
            </AnimatedCard>

            <AnimatedCard className="p-6 text-center" animation="scaleIn" delay={300}>
              <div className="text-4xl mb-4 animate-bounce-in" style={{ animationDelay: '0.4s' }}>✅</div>
              <h3 className="text-lg font-bold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Standards, metrics and continuous improvement</p>
            </AnimatedCard>

            <AnimatedCard className="p-6 text-center" animation="scaleIn" delay={450}>
              <div className="text-4xl mb-4 animate-bounce-in" style={{ animationDelay: '0.6s' }}>🤝</div>
              <h3 className="text-lg font-bold mb-2">Aligned</h3>
              <p className="text-sm text-muted-foreground">Solutions tailored to your goals and culture</p>
            </AnimatedCard>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 scroll-smooth">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="fadeInUp" delay={200} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Our proven 4-phase process</p>
          </AnimatedBox>

          <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" staggerDelay={200}>
            {processSteps.map((step, index) => (
              <AnimatedCard key={index} className="p-8 text-center group" animation="fadeInUp" delay={index * 200}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={28} className="text-background" />
                </div>
                <div className="text-5xl font-bold text-accent/20 mb-4 animate-float">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </AnimatedCard>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Technology Image Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="scaleIn" delay={200} className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img 
              src={technologyNetworkImage}
              alt="Technology Network" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedCard className="p-8 max-w-2xl text-center backdrop-blur-sm bg-white/80" animation="fadeInUp" delay={400}>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Powered by Innovation</h3>
                <p className="text-lg text-muted-foreground">
                  We leverage cutting-edge technology and proven methodologies to deliver exceptional results for our clients.
                </p>
              </AnimatedCard>
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: galleryPresentation, alt: "Business presentation", label: "Excellence in Delivery" },
          { src: galleryDevWork, alt: "Software development" },
          { src: galleryConsultation, alt: "Business consultation" },
        ]}
        title="Service Excellence"
        subtitle="What Sets Us Apart"
        sections={[
          {
            title: "Integrated Solutions",
            icon: <Layers size={24} className="text-background" />,
            content: "Our services work together seamlessly. Whether you need proposal support, staffing solutions, or custom software, we provide coordinated expertise that delivers comprehensive results.",
          },
          {
            title: "Proven Track Record",
            icon: <Award size={24} className="text-background" />,
            content: "With hundreds of successful projects and satisfied clients, we've demonstrated our ability to deliver quality results consistently across all service lines.",
          },
          {
            title: "Rapid Response",
            icon: <Clock size={24} className="text-background" />,
            content: "We understand the urgency of your needs. Our streamlined processes and experienced teams enable us to mobilize quickly without compromising quality.",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedCard className="p-16 text-center" animation="scaleIn" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Get Started
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're preparing to win your next contract, staffing up for growth, or building a digital platform for the future, Workforce One Solutions is ready.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-lg px-12 py-6 group animate-glow">
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
