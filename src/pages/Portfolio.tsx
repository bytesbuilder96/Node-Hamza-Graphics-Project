import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import brandImg from "@/assets/images/Branding.jpg";

// Placeholder projects - will be replaced with user's images
const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    color: "from-primary/30 to-accent/30",
    src: brandImg,
  },
  {
    id: 2,
    title: "Mobile App UI",
    category: "UI/UX Design",
    color: "from-accent/30 to-primary/20",
  },
  {
    id: 3,
    title: "Marketing Campaign",
    category: "Graphic Design",
    color: "from-primary/20 to-accent/40",
  },
  {
    id: 4,
    title: "Website Redesign",
    category: "UI/UX Design",
    color: "from-accent/20 to-primary/30",
  },
  {
    id: 5,
    title: "Motion Graphics",
    category: "Animation",
    color: "from-primary/40 to-accent/20",
  },
  {
    id: 6,
    title: "Product Packaging",
    category: "Branding",
    color: "from-accent/30 to-primary/40",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
              Our
              <br />
              <span className="text-gradient">Portfolio</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              A showcase of our best work across branding, design, and
              animation.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br"
              >
                {/* IMAGE (sirf hover par show hogi) */}
                {project.src && (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}

                {/* Gradient background (normal state) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-300 group-hover:opacity-20`}
                />

                {/* TITLE + CATEGORY (hamesha visible) */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                  <span className="text-sm text-accent mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Have a project in mind? We'd love to hear from you.
            </p>
            <Button size="lg" asChild className="gap-2">
              <Link to="/contact">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What our clients say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "Hamza Graphics transformed our brand. Their attention to detail and creativity exceeded our expectations.",
                author: "Sarah M.",
                company: "Tech Startup",
              },
              {
                quote:
                  "Professional, creative, and a pleasure to work with. Our new website design has driven incredible results.",
                author: "James K.",
                company: "E-commerce Brand",
              },
              {
                quote:
                  "The motion graphics they created for our campaign were stunning. Highly recommend their services.",
                author: "Emily R.",
                company: "Marketing Agency",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-secondary/30 border border-border"
              >
                <p className="text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
