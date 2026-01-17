import { motion } from "framer-motion";

const partners = [
  "Google",
  "PureDC",
  "VOLTA Cabs",
  "TerraPay",
  "Almonds AI",
  "Avataar AI"
];

const teamFrom = [
  "Atari",
  "Hyundai",
  "Harvard",
  "Stanford",
  "Columbia",
  "IIT",
  "Apple"
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 md:py-32 relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm mb-8 block">
            Trusted by Industry Leaders
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors cursor-default"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16" />

        {/* Team Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-muted-foreground text-sm mb-8 block">
            Team with Experts from
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {teamFrom.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="px-5 py-2 rounded-full glass text-sm md:text-base font-medium text-foreground/70 hover:text-foreground hover:border-primary/30 transition-all cursor-default"
              >
                {org}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
