import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroBg from "@/assets/images/hero-bg.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/25 rounded-full blur-3xl" />

        {/* CONTENT */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm text-white/80">
                Creative Design Agency
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              We Create
              <br />
              <span className="text-accent">Visual Excellence</span>
            </h1>

            <p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-up"
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

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
