import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, Lock, Smartphone } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built to address your unique business challenges.",
    icon: Code2,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your applications.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    description: "Protecting your digital assets with state-of-the-art security measures.",
    icon: Lock,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          We offer a comprehensive range of software solutions to help your business thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full transition-transform hover:-translate-y-1">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
