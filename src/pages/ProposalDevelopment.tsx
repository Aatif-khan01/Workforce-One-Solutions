import { Link } from "react-router-dom";
import { FileText, Target, Pen, Palette, CheckSquare, Calendar, ArrowRight, Lightbulb, Users as UsersIcon, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScheduleMeetingSection from "@/components/ScheduleMeetingSection";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-proposal.jpg";
import businessMeetingImage from "@/assets/business-meeting.jpg";
import galleryPresentation from "@/assets/gallery-presentation.jpg";
import galleryTeam from "@/assets/gallery-team-1.jpg";
import galleryBuilding from "@/assets/gallery-building-1.jpg";

const ProposalDevelopment = () => {
  const services = [
    {
      icon: Target,
      title: "Capture Planning & Strategy",
      description: "Opportunity analysis, competitor intelligence, win themes, and proposal roadmap.",
    },
    {
      icon: Pen,
      title: "Proposal Writing & Content",
      description: "Technical volumes, management plans, past performance and capability statements.",
    },
    {
      icon: Palette,
      title: "Graphics & Design",
      description: "Professional layouts, infographics, charts, and brand-aligned visuals.",
    },
    {
      icon: CheckSquare,
      title: "Compliance Review & QA",
      description: "Section-by-section compliance mapping, Red/Pink/Gold team reviews.",
    },
    {
      icon: Calendar,
      title: "Project Management",
      description: "Timeline management, resource allocation, collaboration and submission support.",
    },
  ];

  const phases = [
    { number: "01", title: "Discovery & Planning", description: "Understanding goals, capture data, and establishing win themes." },
    { number: "02", title: "Development & Drafting", description: "Combining technical, management, and pricing inputs." },
    { number: "03", title: "Review & Refinement", description: "Iterative reviews to enhance clarity and compliance." },
    { number: "04", title: "Finalization & Submit", description: "Quality checks, formatting, packaging and submission." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Proposal Development" className="w-full h-full object-cover" />
          
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-accent to-accent-glow mb-4">
              <FileText size={48} className="text-background" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-accent via-accent-glow to-secondary bg-clip-text text-transparent">
                Proposal Development
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Craft. Compete. Win.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Winning proposals don't happen by chance, they're the result of research, strategy, storytelling, and flawless execution.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 scroll-smooth">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-5xl mx-auto">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              At Workforce One Solutions, we help you transform business opportunities into winning proposals that set you apart from competitors. Our Proposal Development division combines deep domain expertise, compliance precision, and creative storytelling to help clients win government, defence, and commercial contracts.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              We partner with you through every stage, from capture strategy and content creation to reviews and final production, ensuring your proposal reflects excellence, credibility, and value.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Business Meeting Image Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img 
              src={businessMeetingImage}
              alt="Business Meeting" 
              className="w-full h-[500px] object-cover"
            />
            
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Our Core Services
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <GlassCard key={index} className="p-8 group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Process */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Our 4-Phase Process
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {phases.map((phase, index) => (
              <GlassCard key={index} className="p-8 text-center">
                <div className="text-6xl font-bold text-accent/20 mb-4">{phase.number}</div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Why Choose Our Proposal Services
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Deep expertise in government and commercial contracting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Proven track record of winning proposals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Comprehensive compliance and quality assurance</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Strategic approach with data-driven insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Professional design and visual presentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Full project management and submission support</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: galleryPresentation, alt: "Proposal presentation", label: "Winning Strategies" },
          { src: galleryTeam, alt: "Proposal team collaboration" },
          { src: galleryBuilding, alt: "Corporate excellence" },
        ]}
        title="Our Proposal Approach"
        subtitle="Strategy-Driven Excellence"
        sections={[
          {
            title: "Strategic Insight",
            icon: <Lightbulb size={24} className="text-background" />,
            content: "We don't just write proposals, we develop winning strategies. Our team analyzes the competitive landscape, identifies your unique value proposition, and crafts compelling narratives that resonate with evaluators.",
          },
          {
            title: "Collaborative Process",
            icon: <UsersIcon size={24} className="text-background" />,
            content: "We work as an extension of your team, collaborating closely with subject matter experts, executives, and stakeholders to ensure every proposal reflects your organization's strengths and capabilities.",
          },
          {
            title: "Proven Success",
            icon: <Trophy size={24} className="text-background" />,
            content: "Our proposals have secured hundreds of millions in contract value for our clients. We bring battle-tested methodologies, compliance expertise, and creative excellence to every engagement.",
          },
        ]}
        reverse={true}
      />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Win Your Next Contract?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's craft a proposal that stands out and delivers results.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-lg px-12 py-6 group">
                Start Your Proposal
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <ScheduleMeetingSection />
      <Footer />
    </div>
  );
};

export default ProposalDevelopment;
