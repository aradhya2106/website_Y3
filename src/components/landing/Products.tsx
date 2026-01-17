import { motion } from "framer-motion";
import { Globe, Search, Cpu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Globe,
    title: "AI Agentic Browser + Edge Platform",
    description: "Complete browsing and interaction infrastructure for agentic AI systems with built-in data collection and evaluation capabilities.",
    status: "Available",
    features: ["Browsing + Interactions", "Data Collection", "Real-time Evaluation"],
    gradient: "from-primary to-secondary"
  },
  {
    icon: Search,
    title: "AI Meta Search",
    description: "Enhanced search with relevance, safety, and task-completion metrics for more intelligent information retrieval.",
    status: "Coming Soon",
    features: ["Relevance Scoring", "Safety Metrics", "Task Completion"],
    gradient: "from-secondary to-accent"
  },
  {
    icon: Cpu,
    title: "Agentic Operating System (AOS)",
    description: "A unified stack to run, monitor, and evaluate agentic AI behavior across all your systems.",
    status: "Beta",
    features: ["Unified Monitoring", "Behavior Analysis", "Cross-system Evaluation"],
    gradient: "from-accent to-primary"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
            Products & Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Purpose-Built{" "}
            <span className="text-gradient-accent">AI Infrastructure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade tools designed for the unique challenges of agentic AI systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient}`}>
                    <product.icon className="w-6 h-6 text-background" />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    product.status === "Available" 
                      ? "bg-accent/20 text-accent" 
                      : product.status === "Beta"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {product.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-muted/50 text-foreground/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group/btn hover:bg-primary/10"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
