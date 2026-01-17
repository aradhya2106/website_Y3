import { motion } from "framer-motion";
import { Database, Shield, Users, Bot } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Agentic Data & Evaluation",
    description: "We create real-world, agentic datasets — not just static labels, but workflows that measure how models behave when action matters.",
    features: [
      "Agentic Browsing Datasets",
      "Edge-Case Scenarios",
      "Real-World Task & Environment Data",
      "Robust Safety / Adversarial Evaluation"
    ],
    gradient: "from-primary to-secondary"
  },
  {
    icon: Shield,
    title: "Safety, Alignment & Risk Discovery",
    description: "Models fail not for lack of capability, but because they lack systematic evaluation against real conditions.",
    features: [
      "Adversarial red-team tests",
      "Human preference & feedback systems",
      "Principle-grounded alignment data"
    ],
    gradient: "from-secondary to-accent"
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Workflows",
    description: "Judgment, nuance, and risk often only appear when real people interact with a model.",
    features: [
      "Scalable human feedback loops",
      "Annotation + verification systems",
      "Edge-case discovery workflows"
    ],
    gradient: "from-accent to-primary"
  },
  {
    icon: Bot,
    title: "RPA + AI Agents",
    description: "Robotic Process Automation fused with AI agents for intelligent, reasoning-based automation.",
    features: [
      "Automate complex decisions",
      "Interact with software environments",
      "Execute tasks requiring reasoning + action"
    ],
    gradient: "from-primary via-secondary to-accent"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Building AI That Works in the{" "}
            <span className="text-gradient">Real World</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From data creation to safety evaluation, we provide end-to-end 
            infrastructure for reliable AI systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="w-6 h-6 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
