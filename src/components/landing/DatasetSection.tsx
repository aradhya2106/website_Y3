import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const datasets = [
  {
    client: "Google MediaPipe",
    description: "Foot detection and measurement datasets for pose estimation",
  },
];

const DatasetSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -bottom-40 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Past Dataset Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Proven <span className="text-gradient">Track Record</span>
            </h2>
          </div>

          {/* Dataset Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {datasets[0].client}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {datasets[0].description}
                  </p>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  We've contributed to world-class AI research with precision
                  datasets
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DatasetSection;
