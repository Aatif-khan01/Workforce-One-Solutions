import { Link } from "react-router-dom";
import { Shield, Users, Search, CheckCircle, Award, ArrowRight, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-recruitment.jpg";
import securityClearanceImage from "@/assets/security-clearance.jpg";
import gallerySecurity from "@/assets/gallery-security.jpg";
import galleryInterview from "@/assets/gallery-interview.jpg";
import galleryPartnership from "@/assets/gallery-partnership.jpg";

const ClearedRecruitment = () => {
  const clearanceLevels = [
    "Secret",
    "Top Secret",
    "Top Secret/SCI",
    "Full-Scope Polygraph",
    "Counterintelligence Polygraph",
    "Public Trust",
  ];

  const roles = [
    "Cybersecurity Experts",
    "Intelligence Analysts",
    "Software Engineers",
    "Systems Administrators",
    "Project Managers",
    "Technical Support Specialists",
  ];

  const industries = [
    "Defense & Aerospace",
    "Intelligence & Cybersecurity",
    "Government Contracting",
    "Healthcare & Life Sciences",
    "Information Technology",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Cleared Recruitment" className="w-full h-full object-cover" />
          
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-secondary to-coral mb-4">
              <Shield size={48} className="text-background" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-secondary via-coral to-accent bg-clip-text text-transparent">
                Cleared Recruitment
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Securing Talent for Sensitive Missions
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the critical importance of having the right people in the right roles, especially for positions requiring security clearances.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 scroll-smooth">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-5xl mx-auto animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Our Cleared Recruitment services are designed to help government contractors and agencies find qualified professionals with the necessary clearances to meet the demands of sensitive projects. Our extensive network and database, developed over years of experience, enable us to quickly identify and connect with candidates who meet your specific clearance requirements.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Security Clearance Image Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img 
              src={securityClearanceImage}
              alt="Security Clearance" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <GlassCard className="p-8 max-w-2xl text-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Security First</h3>
                <p className="text-lg text-muted-foreground">
                  We maintain the highest standards of security compliance and confidentiality in all our recruitment processes.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Clearance Levels */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Security Clearance Levels
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">We specialize in sourcing professionals with active clearances</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {clearanceLevels.map((level, index) => (
              <GlassCard key={index} className="p-6 text-center group">
                <Shield className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold">{level}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                End-to-End Recruitment Process
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <GlassCard className="p-8">
              <Search className="w-16 h-16 mb-6 text-accent" />
              <h3 className="text-xl font-bold mb-3">Needs Assessment</h3>
              <p className="text-muted-foreground">Understanding your specific requirements and project goals.</p>
            </GlassCard>

            <GlassCard className="p-8">
              <Users className="w-16 h-16 mb-6 text-secondary" />
              <h3 className="text-xl font-bold mb-3">Candidate Sourcing</h3>
              <p className="text-muted-foreground">Utilizing our database and industry connections to find qualified candidates.</p>
            </GlassCard>

            <GlassCard className="p-8">
              <CheckCircle className="w-16 h-16 mb-6 text-coral" />
              <h3 className="text-xl font-bold mb-3">Screening & Vetting</h3>
              <p className="text-muted-foreground">Thorough background checks and interviews to ensure candidates meet all requirements.</p>
            </GlassCard>

            <GlassCard className="p-8">
              <Award className="w-16 h-16 mb-6 text-accent-glow" />
              <h3 className="text-xl font-bold mb-3">Placement & Onboarding</h3>
              <p className="text-muted-foreground">Facilitating smooth transitions for new hires with full security protocol compliance.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Specialized Roles */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Specialized Roles We Fill
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <GlassCard key={index} className="p-6 flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={24} className="text-background" />
                </div>
                <span className="text-lg font-semibold">{role}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Why Choose Our Cleared Recruitment
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Expertise in Cleared Recruitment</h3>
                  <p className="text-muted-foreground">Years of experience in the industry with deep understanding of security clearance complexities.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Extensive Network</h3>
                  <p className="text-muted-foreground">Vast database of cleared professionals allows us to quickly find the right candidates.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-coral">Compliance Assurance</h3>
                  <p className="text-muted-foreground">We adhere to all federal regulations and security protocols ensuring placements meet necessary standards.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent-glow">Tailored Solutions</h3>
                  <p className="text-muted-foreground">We work closely with you to understand specific requirements and provide customized staffing solutions.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="px-6 py-3 rounded-full bg-glass/40 backdrop-blur-xl border border-glass-border hover:border-accent transition-colors">
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: gallerySecurity, alt: "Security operations", label: "Cleared Professionals" },
          { src: galleryInterview, alt: "Professional interview" },
          { src: galleryPartnership, alt: "Trusted partnerships" },
        ]}
        title="Our Recruitment Excellence"
        subtitle="Finding Mission-Critical Talent"
        sections={[
          {
            title: "Rigorous Vetting",
            icon: <CheckCircle size={24} className="text-background" />,
            content: "Every candidate undergoes comprehensive screening including technical assessments, security verification, reference checks, and cultural fit evaluation to ensure they meet the highest standards.",
          },
          {
            title: "Clearance Expertise",
            icon: <Award size={24} className="text-background" />,
            content: "We specialize in all clearance levels from Confidential to TS/SCI with poly. Our team understands the nuances of security requirements and maintains relationships with pre-cleared talent pools.",
          },
          {
            title: "Speed to Mission",
            icon: <Target size={24} className="text-background" />,
            content: "Time is critical in cleared recruitment. Our extensive network and streamlined processes enable us to quickly identify, vet, and deliver qualified candidates who are ready to contribute from day one.",
          },
        ]}
      />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Cleared Team?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's connect you with top-tier security-cleared professionals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-lg px-12 py-6 group">
                Start Recruiting
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClearedRecruitment;
