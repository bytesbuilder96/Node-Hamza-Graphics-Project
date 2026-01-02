import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Fingerprint,
  Monitor,
  Play,
  ArrowRight,
  Check,
} from "lucide-react";
import servicesHero from "@/assets/images/services-hero.jpg";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "From print to digital, we create stunning visuals that communicate your message effectively.",
    features: [
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design",
      "Packaging Design",
    ],
  },
  {
    icon: Fingerprint,
    title: "Branding & Identity",
    description:
      "Build a memorable brand that resonates with your audience and stands the test of time.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity Systems",
      "Brand Strategy",
    ],
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "Create intuitive digital experiences that users love and that drive conversions.",
    features: [
      "Web Design",
      "Mobile App Design",
      "User Research",
      "Prototyping",
    ],
  },
  {
    icon: Play,
    title: "Motion / 2D Animation",
    description:
      "Bring your brand to life with captivating animations and motion graphics.",
    features: [
      "Explainer Videos",
      "Logo Animations",
      "Social Media Content",
      "Promotional Videos",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${servicesHero})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          {/* 👉 CENTER ALIGN HERE */}
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up text-white"
              style={{ animationDelay: "0.2s" }}
            >
              Our
              <br />
              <span className="text-accent">Services</span>
            </h1>

            <p
              className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Comprehensive design solutions to help your brand stand out and
              succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <Check size={16} className="text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A streamlined approach to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your goals and vision",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Developing a creative roadmap",
              },
              {
                step: "03",
                title: "Design",
                desc: "Bringing concepts to life",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Polished final deliverables",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and find the perfect solution for your
              needs.
            </p>
            <Button size="lg" asChild className="gap-2">
              <Link to="/contact">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
