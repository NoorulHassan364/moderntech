import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  LineChart,
  Cpu,
  Shield,
  Blocks
} from 'lucide-react';

const services = [
  {
    icon: <Code />,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with cutting-edge technologies to meet your specific business needs.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Smartphone />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Globe />,
    title: 'Web Development',
    description: 'Responsive and dynamic web applications that engage and convert visitors.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Database />,
    title: 'Database Solutions',
    description: 'Optimized database architectures for efficient data management and scalability.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Cloud />,
    title: 'Cloud Services',
    description: 'Cloud-native solutions leveraging AWS, Azure, or Google Cloud Platform.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: <LineChart />,
    title: 'Analytics & BI',
    description: 'Data-driven insights and visualizations to power better business decisions.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Cpu />,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that automate processes and unlock new possibilities.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: <Shield />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: <Blocks />,
    title: 'Blockchain Development',
    description: 'Decentralized applications and smart contracts for the Web3 ecosystem.',
    color: 'from-blue-500 to-indigo-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business in the digital age
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                   style={{ backgroundImage: `linear-gradient(to right, ${service.color})` }}
              />
              <div className="relative p-8 rounded-xl bg-card border border-card-border backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
