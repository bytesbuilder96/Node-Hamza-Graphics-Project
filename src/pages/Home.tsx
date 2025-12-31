import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">
                Creative Design Agency
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              We Create
              <br />
              <span className="text-gradient">Visual Excellence</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Transforming ideas into stunning visual experiences. We craft
              designs that captivate, inspire, and drive results.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" asChild className="gap-2">
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Graphic Design", desc: "Visual communication that speaks volumes" },
              { title: "Branding", desc: "Identity systems that stand out" },
              { title: "UI/UX Design", desc: "Experiences users love" },
              { title: "Motion Design", desc: "Stories that move" },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/services">
                Explore All Services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's collaborate and bring your vision to life with designs that
              make an impact.
            </p>
            <Button size="lg" asChild className="gap-2">
              <Link to="/contact">
                Let's Talk
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
