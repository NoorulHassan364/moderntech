import { motion } from 'framer-motion';
import { Code2, Users, Globe2, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A team of passionate developers dedicated to creating innovative software solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-card border border-card-border p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-foreground/70 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth and innovation in the digital age.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <Stat icon={<Users className="w-8 h-8" />} label="Team Members" value="50+" />
                  <Stat icon={<Globe2 className="w-8 h-8" />} label="Countries" value="20+" />
                  <Stat icon={<Code2 className="w-8 h-8" />} label="Projects" value="200+" />
                  <Stat icon={<Award className="w-8 h-8" />} label="Awards" value="15+" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Feature
              title="Innovation First"
              description="We stay ahead of the curve by adopting and implementing the latest technologies."
            />
            <Feature
              title="Client-Centric"
              description="Your success is our priority. We work closely with you to understand and meet your unique needs."
            />
            <Feature
              title="Quality Driven"
              description="We maintain high standards in every project, ensuring robust and scalable solutions."
            />
            <Feature
              title="Continuous Growth"
              description="We invest in our team's development to bring you the best expertise and solutions."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Stat = ({ icon, label, value }) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-3">
      {icon}
    </div>
    <div className="font-bold text-2xl mb-1">{value}</div>
    <div className="text-sm text-foreground/70">{label}</div>
  </div>
);

const Feature = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-card border border-card-border p-6 rounded-xl"
  >
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-foreground/70">{description}</p>
  </motion.div>
);
