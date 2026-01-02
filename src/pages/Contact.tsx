import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/images/contact-hero.jpg";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Twitter,
  Linkedin,
  Dribbble,
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;

    const formData = {
      name: (form.name as unknown as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast({
        title: "Message sent ✅",
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: "Error ❌",
        description: error.message || "Server error",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactHero})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Get in <br />
              <span className="text-accent">Touch</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="gap-2 w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary" />
                  <a href="mailto:mr.mhamza005@gmail.com">
                    mr.mhamza005@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary" />
                  <a href="tel:+923137128360">+92 313 7128360</a>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary" />
                  <span>Available for remote work worldwide</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}>
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
