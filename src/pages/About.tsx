import { Link } from "react-router-dom";
import { Shield, Heart, Award, Users, Compass, Rocket, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScheduleMeetingSection from "@/components/ScheduleMeetingSection";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedBox from "@/components/AnimatedBox";
import StaggeredAnimation from "@/components/StaggeredAnimation";
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
          
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <AnimatedBox animation="fadeInUp" delay={200}>
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-accent via-accent-glow to-secondary bg-clip-text text-transparent">
                  About Us
                </span>
              </h1>
            </AnimatedBox>
            <AnimatedBox animation="fadeInUp" delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Empowering organizations to navigate today's fast-moving business landscape
              </p>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 scroll-smooth">
        <div className="container mx-auto px-6">
          <AnimatedCard className="p-12 max-w-5xl mx-auto" animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <AnimatedBox animation="fadeInLeft" delay={400}>
                <p>
                  Founded to help organisations navigate today's fast-moving business and technology landscape, <span className="text-accent font-semibold">Workforce One Solutions</span> is a trusted partner for enterprises that demand speed, expertise and results.
                </p>
              </AnimatedBox>
              <AnimatedBox animation="fadeInLeft" delay={600}>
                <p>
                  We specialize in Proposal Development, Cleared Recruitment, Flexible Staffing, and Custom Software Development, all under one roof. Our mission is to enable your success: we bring together human insight, operational discipline and emerging technology so that you can focus on growth and mission-critical work.
                </p>
              </AnimatedBox>
              <AnimatedBox animation="fadeInLeft" delay={800}>
                <p>
                  Over the years, we have supported a broad spectrum of clients, from large enterprises and government contractors to disruptive startups, delivering solutions that help them win contracts, secure high-performing teams and build software that scales.
                </p>
              </AnimatedBox>
              <AnimatedBox animation="fadeInLeft" delay={1000}>
                <p>
                  We are proud of our record: delivering excellence while upholding the highest standards of service, integrity and quality. We partner with cutting-edge technology platforms, deploy rigorous processes and maintain a committed team of professionals who understand how to turn potential into performance.
                </p>
              </AnimatedBox>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Team Collaboration Image Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="scaleIn" delay={200} className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img 
              src={teamCollaborationImage}
              alt="Team Collaboration" 
              className="w-full h-[500px] object-cover"
            />
            
          </AnimatedBox>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="fadeInUp" delay={200} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
          </AnimatedBox>

          <StaggeredAnimation className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={200}>
            <AnimatedCard className="p-8" animation="scaleIn" delay={0}>
              <div className="text-4xl font-bold text-accent mb-4 animate-float">20+</div>
              <h3 className="text-2xl font-bold mb-3">Years of Experience</h3>
              <p className="text-muted-foreground">
                Combined experience in proposal management, cleared staffing, workforce deployment and software engineering.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" animation="scaleIn" delay={200}>
              <div className="text-4xl font-bold text-secondary mb-4 animate-float" style={{ animationDelay: '0.5s' }}>100%</div>
              <h3 className="text-2xl font-bold mb-3">Tailor-Made Solutions</h3>
              <p className="text-muted-foreground">
                Our services are not off-the-shelf — we align precisely with your business goals and operating model.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" animation="scaleIn" delay={400}>
              <div className="text-4xl font-bold text-coral mb-4 animate-float" style={{ animationDelay: '1s' }}>$$$</div>
              <h3 className="text-2xl font-bold mb-3">Efficiency & Value</h3>
              <p className="text-muted-foreground">
                Delivering high quality at competitive cost while maintaining rigorous standards.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" animation="scaleIn" delay={600}>
              <div className="text-4xl font-bold text-accent-glow mb-4 animate-float" style={{ animationDelay: '1.5s' }}>✓</div>
              <h3 className="text-2xl font-bold mb-3">Values-Driven</h3>
              <p className="text-muted-foreground">
                Integrity, Collaboration, Excellence and Flexibility guide every engagement.
              </p>
            </AnimatedCard>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Client Bill of Rights */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="fadeInUp" delay={200} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Our Promise to You
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Client Bill of Rights</p>
          </AnimatedBox>

          <StaggeredAnimation className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto" staggerDelay={200}>
            {principles.map((principle, index) => (
              <AnimatedCard key={index} className="p-8 group" animation="fadeInUp" delay={index * 200}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent-glow group-hover:scale-110 transition-transform duration-300">
                    <principle.icon size={28} className="text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </StaggeredAnimation>

          <AnimatedBox animation="fadeInUp" delay={800} className="mt-12 text-center">
            <AnimatedCard className="p-8 max-w-3xl mx-auto">
              <p className="text-lg text-foreground/90 italic">
                "We are committed to delivering a standout client experience, one rooted in responsiveness, transparency and real results."
              </p>
            </AnimatedCard>
          </AnimatedBox>
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedCard className="p-16 text-center" animation="scaleIn" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us in Shaping the Future</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with a team that's committed to your success.
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

      <ScheduleMeetingSection />
      <Footer />
    </div>
  );
};

export default About;
