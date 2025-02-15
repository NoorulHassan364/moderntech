import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-foreground/70 mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfo
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                content="hello@techcorp.com"
              />
              <ContactInfo
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Us"
                content="123 Innovation Street, Tech City, TC 12345"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-md border border-input bg-background min-h-[150px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-lg bg-primary/10 text-primary">
      {icon}
    </div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-foreground/70">{content}</p>
    </div>
  </div>
);
