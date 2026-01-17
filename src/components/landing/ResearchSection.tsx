import { Cpu, Heart, Lightbulb, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const researchAreas = [
  {
    icon: Cpu,
    title: "Agentic Operating System (AOS)",
    description:
      "Research-driven system design for autonomous AI behavior monitoring and evaluation",
    tag: "Systems Research",
  },
  {
    icon: Heart,
    title: "Emotional Quotient (EQ) Models",
    description:
      "EQ-based behavior and feedback models for more human-aligned AI interactions",
    tag: "Behavioral AI",
  },
  {
    icon: Lightbulb,
    title: "Real-World Intelligence",
    description:
      "Innovation models focused on practical agentic intelligence in diverse environments",
    tag: "Applied Research",
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

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

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
            Research & Innovation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pushing the <span className="text-gradient">Boundaries</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our research team explores the frontier of agentic AI, combining
            academic rigor with practical application.
          </p>
        </motion.div>

        {/* Research Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {researchAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                {/* Tag */}
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent mb-6 w-fit">
                  {area.tag}
                </span>

                {/* Icon */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-violet-500/20 mb-6 w-fit">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                  {area.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group/link mt-auto"
                >
                  Read Paper
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
