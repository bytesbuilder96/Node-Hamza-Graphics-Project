import { Layout } from "@/components/Layout";
import { Target, Eye, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every design serves a purpose. We create with intention and clarity.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "The little things make the biggest difference. We obsess over every pixel.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries and exploring new creative territories.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every project we deliver.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
              About
              <br />
              <span className="text-gradient">Hamza Graphics</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              We're a creative agency dedicated to transforming brands through
              exceptional design.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Creative Philosophy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Hamza Graphics, we believe that great design is more than
                  aesthetics—it's about creating meaningful connections between
                  brands and their audiences.
                </p>
                <p>
                  Founded with a passion for visual storytelling, we've grown
                  into a full-service creative agency that helps businesses stand
                  out in an increasingly crowded digital landscape.
                </p>
                <p>
                  Our approach combines strategic thinking with creative
                  excellence, ensuring every project we undertake delivers real
                  results for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-8xl font-bold text-gradient">HG</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our core values shape everything we do and how we approach every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Dedication" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
