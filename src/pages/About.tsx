import { Link } from "react-router-dom";
import { Shield, Heart, Award, Users, Rocket, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScheduleMeetingSection from "@/components/ScheduleMeetingSection";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-about.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";
import galleryPartnership from "@/assets/gallery-partnership.jpg";
import galleryOfficeView from "@/assets/gallery-office-view.jpg";
import galleryCreativeTeam from "@/assets/gallery-creative-team.jpg";

const About = () => {
  const principles = [
    {
      title: "Your Success Is Our Priority",
      description: "We regard you as a partner, your goals are our goals. We invest time to understand your mission, culture and outcomes.",
      icon: Heart,
    },
    {
      title: "Your Data & Info Are Secure",
      description: "We handle your information responsibly and implement strong controls to protect confidentiality.",
      icon: Shield,
    },
    {
      title: "Transparent Communication",
      description: "We keep you informed, respond promptly and work in the channels you prefer. No surprises, no hidden fees.",
      icon: Users,
    },
    {
      title: "Quality First",
      description: "We apply disciplined processes and continuous improvement to ensure our work meets and exceeds expectations.",
      icon: Award,
    },
  ];

  const stats = [
    { value: "10+", label: "Years of Expertise", percentage: 50 },
    { value: "100%", label: "Tailored Solutions", percentage: 100 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Mobile Optimized with Image First */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Image (First on mobile) */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="About Us" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  About us
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                 Founded to help organisations navigate today's fast-moving business and technology landscape, Workforce One Solutions is a trusted partner for enterprises that demand speed, expertise and results. We specialize in Proposal Development, Cleared Recruitment, Flexible Staffing, and Custom Software Development, all under one roof.
                </p>
              </div>

              {/* Stats - FIXED Mobile SVG */}
              <div className="flex flex-col gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-background rounded-2xl p-4 shadow-lg border border-border">
                    <div className="flex items-center gap-4">
                      {/* Mobile-Responsive SVG Circle */}
                      <div className="relative flex-shrink-0">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                          {/* Background Circle */}
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="none"
                            className="text-muted-foreground/10"
                          />
                          {/* Progress Circle */}
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="url(#greenGradient)"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={`${(stat.percentage / 100) * 201} 201`}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                          />
                          <defs>
                            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#18cb96" />
                            </linearGradient>
                          </defs>
                        </svg>
                        {/* Centered Text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold bg-gradient-to-br from-emerald-500 to-[#18cb96] bg-clip-text text-transparent">
                            {stat.value}
                          </span>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-foreground text-base">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section (remove previous story and replace with only your new content) */}
      <section className="py-16 md:py-24 scroll-smooth">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="p-6 sm:p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-foreground/90 leading-relaxed">
              <p>
                Workforce One Solutions was founded with a clear purpose that is to empower organizations to succeed in today’s fast-paced and ever-evolving business and technology landscape through talent and innovation. As a trusted partner to both federal contractors and commercial enterprises, we bring together proven expertise, agility, and a results-driven solutions.
              </p>
              <p>
                Our diverse range of services include Proposal Development, Cleared Recruitment, Flexible Staffing Solutions, and Custom Software Development that are designed to help our clients build stronger teams, streamline operations, and achieve mission-critical objectives with efficiency and precision.
              </p>
              <p>
                At Workforce One Solutions, we pride ourselves on being more than just a service provider. We’re a strategic partner committed to innovation, measurable impact and delivering excellence in every engagement.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Team Collaboration Image Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img 
              src={teamCollaborationImage}
              alt="Team Collaboration" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-3 md:mb-4">20+</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Years of Experience</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Combined experience in proposal management, cleared staffing, workforce deployment and software engineering.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">100%</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Tailor-Made Solutions</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Our services are not off-the-shelf — we align precisely with your business goals and operating model.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-coral mb-3 md:mb-4">$$$</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Efficiency & Value</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Delivering high quality at competitive cost while maintaining rigorous standards.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-accent-glow mb-3 md:mb-4">✓</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Values-Driven</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Integrity, Collaboration, Excellence and Flexibility guide every engagement.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Client Bill of Rights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Our Promise to You
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Client Bill of Rights</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <GlassCard key={index} className="p-6 md:p-8 group">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-accent to-accent-glow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <principle.icon size={24} className="text-background sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-accent transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <GlassCard className="p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-foreground/90 italic">
                "We are committed to delivering a standout client experience, one rooted in responsiveness, transparency and real results."
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: galleryPartnership, alt: "Business partnership", label: "Our Culture" },
          { src: galleryOfficeView, alt: "Modern workspace" },
          { src: galleryCreativeTeam, alt: "Creative collaboration" },
        ]}
        title="Our Core Values"
        subtitle="The Principles That Guide Us"
        sections={[
          {
            title: "Integrity First",
            icon: <Shield size={24} className="text-background" />,
            content: "We operate with transparency, honesty, and ethical standards in all our interactions. Your trust is our most valuable asset, and we earn it through consistent, principled action.",
          },
          {
            title: "Client-Centric Focus",
            icon: <Heart size={24} className="text-background" />,
            content: "Your success is our success. We listen deeply, understand your unique challenges, and tailor solutions that align with your goals, culture, and mission.",
          },
          {
            title: "Continuous Innovation",
            icon: <Rocket size={24} className="text-background" />,
            content: "We embrace change and continuously evolve our methods, tools, and approaches to stay ahead of industry trends and deliver cutting-edge solutions.",
          },
        ]}
        reverse={true}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Join Us in Shaping the Future</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Partner with a team that's committed to your success.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-base md:text-lg px-8 sm:px-12 py-5 md:py-6 group w-full sm:w-auto">
                Get in Touch
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

export default About;
