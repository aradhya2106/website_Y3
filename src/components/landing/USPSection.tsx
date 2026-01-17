import { Sparkles, Globe2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const usps = [
  {
    icon: Sparkles,
    title: "AI-Based Dataset Development",
    description:
      "Not generic labeling — intelligent, purpose-built datasets that adapt to your model's needs",
  },
  {
    icon: Globe2,
    title: "Underrepresented Data Focus",
    description:
      "Strong focus on developing-nation and underrepresented real-world data for global AI fairness",
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Pipelines",
    description:
      "Scalable human-in-the-loop workflows that deliver enterprise quality at competitive prices",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const USPSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Why We're Different
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Unique <span className="text-gradient">Advantage</span>
          </h2>
        </motion.div>

        {/* USP Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                {/* Icon with Glow */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 flex items-center justify-center">
                    <usp.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;
