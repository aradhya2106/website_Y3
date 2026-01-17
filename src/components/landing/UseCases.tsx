import { motion } from "framer-motion";
import { Car, Glasses, BotMessageSquare, Brain, Building2, ShieldCheck } from "lucide-react";

const useCases = [
  { icon: Car, label: "Autonomous Vehicles", color: "text-primary" },
  { icon: Glasses, label: "Smart Glasses & Wearables", color: "text-secondary" },
  { icon: BotMessageSquare, label: "Humanoid Robotics", color: "text-accent" },
  { icon: Brain, label: "Mental Health AI", color: "text-primary" },
  { icon: Building2, label: "Enterprise Workflows", color: "text-secondary" },
  { icon: ShieldCheck, label: "AI Safety Compliance", color: "text-accent" },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            High-Impact{" "}
            <span className="text-gradient">Domains</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our infrastructure powers AI systems across industries where reliability 
            and safety are non-negotiable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-primary/30"
            >
              <useCase.icon className={`w-8 h-8 mx-auto mb-4 ${useCase.color}`} />
              <span className="text-sm font-medium text-foreground/90">{useCase.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
