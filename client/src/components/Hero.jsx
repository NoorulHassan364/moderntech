import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 2.5, 1],
                x: [Math.random() * 200, Math.random() * -200, Math.random() * 200],
                y: [Math.random() * 200, Math.random() * -200, Math.random() * 200],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-3 h-3 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Innovate. Create. Transform.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              We build cutting-edge software solutions that drive business growth and transform user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center mb-20"
          >
            <Button size="lg" className="group text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={<Code2 className="h-8 w-8" />}
              title="Modern Tech Stack"
              description="Built with cutting-edge technologies for optimal performance"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure by Design"
              description="Enterprise-grade security at every layer"
            />
            <FeatureCard
              icon={<Rocket className="h-8 w-8" />}
              title="Rapid Development"
              description="Quick iterations with continuous deployment"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-8 rounded-xl bg-card/50 border border-card-border backdrop-blur-sm"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </motion.div>
);