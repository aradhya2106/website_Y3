import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", details: "" });
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md mx-4 max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <div className="glass-strong rounded-2xl p-8 backdrop-blur-xl m-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Details Field */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium mb-2"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
